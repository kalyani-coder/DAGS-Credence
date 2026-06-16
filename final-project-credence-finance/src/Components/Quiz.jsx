import React from 'react'
// import pythonImage from "../assets/pythonimg.png";
import Light from '../assets/Light.png'

const Quiz = () => {
  return (
    <div>
         <div className="python-training-wrapper">
              {/* Hero Section */}
                <section className="hero-section">
                     <div className="container">
                       <div className="row align-items-center">
                         <div className="col-md-8">
                           <h6 className="hed">Technology Driven Advisory!</h6>
                           <h1 className="ml-title ">
                             Quiz Questions 
                             <br />
                             <span className="funds"> In Cloud</span>
                           </h1>
                           <p className="about-paragraph">
          Empowering Individuals with financial literacy to achieve financial
          independence & Transforming businesses through innovative fin-tech and
          technology solutions to achieve Digital Transformation.
        </p>
                         </div>
                         <div className="col-md-4 text-center">
                           <img src={Light} className="img-fluid hero-image" alt="ML Internship" />
                         </div>
                       </div>
                     </div>
                   </section>
             
            </div>
        
    </div>
  )
}

export default Quiz