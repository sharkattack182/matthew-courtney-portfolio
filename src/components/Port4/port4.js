import React from "react";

import Example4 from "./imgs/main-lg.png"

function Port4() {
    return (
        <div className="container-port">

        <div className="row">
            <div className="col-md-10">
                <h1 className="title">Geo Snacks</h1>
            </div>
        </div>
        <div className="blue">
            <div className="row">
                <div className="col-md-10">
                <img src={Example4} alt="geo-snacks" className="image1" />
                    <p className= "port-description">Geo Snacks was the first Project in my bootcamp. The idea was to create an app that utilizes two or more web based APIs. We were free to choose whatever
                    APIs we wanted. I decided to redo this project entirely on my own after graduation. This version is much cleaner than the first time around. I utilized Jquery to render most of the elements in
                    the app rather than hard coding HTML. this provides a much cleaner UI. I used over five API calls in this project mostly from the ZomatoAPI and one from the GEOIndex API that gathers the users geo location.</p>
                </div>
            </div>
            <div className="row">
                <div className= "link-buttons">
                <a href="https://github.com/sharkattack182/geo-snacks-redeux" target="_blank" className="button button-outline button-white">Github</a>
            <a href="https://sharkattack182.github.io/geo-snacks-redeux/" target="_blank" className="button button-outline button-white">Deployed</a>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Port4;