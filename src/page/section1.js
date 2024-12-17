import React from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import "../style/SectionOne.css";

function SectionOne () {

    return (
    
        <section className="section-content">
            <div className="hero-section">
                <figure className="hero-figure">
                    <img className="main-img" src="me.jpg" alt=""></img>
                </figure>
                <div className="section-1-text-wrapper">
                <div className="hero-text-wrapper">
                <h2>
                    <Typewriter onInit={(typewriter) => {
                    typewriter
                    .typeString('Hi, I am <span style="color: orange;"> Hamiezan!</span>')
                    .start()
                    }} />
                   
                </h2>
                    <h3>Backend Developer <FontAwesomeIcon icon={faLaptop} style={{ marginLeft: '8px' }}/></h3>
                    <p>Skilled in web and mobile app development. Quick
                    learner with strong analytical skills.</p>
                </div>
                <div className="button-wrapper">
                        {/* My Resume Button */}
                        <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="section-1-button1">My Resume</button>
                        </a>
                        
                        {/* Hire Me Button */}
                        <a href="mailto:mhamiezan24@gmail.com?subject=Hiring Inquiry" target="_blank" rel="noopener noreferrer">
                            <button className="section-1-button2">Hire Me</button>
                        </a>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default SectionOne;