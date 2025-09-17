import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// src/index.js or src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // ✅ Required for collapse to work
import { Provider } from 'react-redux';
import appStore from './utlis/appStore.js';
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </StrictMode>,
)


