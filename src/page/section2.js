import React from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

function SectionTwo () {

    return (
        <section className="section-2-content">
            <div className="header-title">
                <h1>About Me</h1>
                    <p>Why Choose Me?</p>
            </div>
                <div className="bar">
                    <span class="divider-text"></span>
                </div>

        <div className="content-frame">
            <div className="content-frame-inner">
                <div className="content-frame-front">
                    <img src="me2.jpg" alt="Profile" className="profile-img"></img>
                </div>
                <div className="content-frame-back">
                <div className="text-content">
                    <Typewriter onInit={(typewriter) => {
                        typewriter.typeString("Backend developer and mobile deveoper...").start();
                    }} />

                    <ul className="highlights" >
                        <li> Handsome</li>
                        <li> Handsome</li>
                        <li> Handsome</li>
                        <li> Handsome</li>
                    </ul>
                    <div className="buttons">
                        <button className="hire-me">Hire Me</button>
                        <button className="get-resume">My Resume</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

        </section>
    )
}

export default SectionTwo;