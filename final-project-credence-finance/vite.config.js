import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif'])
const missingImagePlaceholder =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"%3E%3Crect width="640" height="360" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="%2364758b"%3EImage missing%3C/text%3E%3C/svg%3E'

const normalizeFilePath = (filePath) => filePath.split(path.sep).join('/')

const resolveAssetPath = (source, importer) => {
  const cleanSource = source.split('?')[0]

  if (cleanSource.startsWith('/')) {
    return path.resolve(projectRoot, cleanSource.slice(1))
  }

  return path.resolve(path.dirname(importer), cleanSource)
}

function missingImageFallback() {
  return {
    name: 'missing-image-fallback',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer) return null

      const cleanSource = source.split('?')[0]
      const extension = path.extname(cleanSource).toLowerCase()

      if (!imageExtensions.has(extension)) return null

      const assetPath = resolveAssetPath(source, importer)

      if (fs.existsSync(assetPath)) return null

      const svgAssetPath = `${assetPath.slice(0, -extension.length)}.svg`

      if (fs.existsSync(svgAssetPath)) {
        return normalizeFilePath(svgAssetPath)
      }

      return `\0missing-image:${normalizeFilePath(assetPath)}`
    },
    load(id) {
      if (!id.startsWith('\0missing-image:')) return null

      return `export default ${JSON.stringify(missingImagePlaceholder)}`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [missingImageFallback(), react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
