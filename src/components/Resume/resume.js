import React from "react";
import './resume.css';
import PDF from './Resume.pdf'


function Resume() {
    return (
        <div className="container-custom">
            <h1 className="heading right">Let's Connect</h1>
            <div className="container-resume"> 
                <div className="blue padding-top">
                    <p>I am currently building my resume in html but for the time being,
                    Please Click the link below to be directed to my Resume</p>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSC6VhSuWUBuCu3Um43gbKCPSIw2wZnK1qnM7C9HFXwc5_DfLmw-bGR7CiYh7RebOXvN2hkJFHhpGBr/pub" target="_blank" id="btn" className="button button-outline button-white resume-target">Resume</a>
                </div>
            </div>
        </div>

    )
}

export default Resume;       