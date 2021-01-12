import React from "react";
import './port3.css';
import Example3 from "./imgs/pokedex.png"

function Port3() {
    return (
        <div className="container-port">

        <div className="row">
            <div className="col-md-10">
                <h1 className="title">Pokedex</h1>
            </div>
        </div>
        <div className="blue">
            <div className="row">
                <div className="col-md-10">
                <img src={Example3} alt="pokedex" className="image1" />
                    <p className= "port-description">The Pokedex served as my second project for the bootcamp. This was the very first full stack application I built in the class.
                         In this project I worked to build the app using the MVC paradaigm. I was responsible for building my own server side API as well.
                     This project also served as my first time working with linting tools. The app uses a web based API called PokedexAPI which supplied most of the
                         images and data points. I built API routes to store user data as well as the data (pokemon) associated to their user id.</p>
                </div>
            </div>
            <div className="row">
                <div className= "link-buttons">
                <a href="https://github.com/sharkattack182/project-2" target="_blank" className="button button-outline button-white">Github</a>
            <a href="https://vast-escarpment-44555.herokuapp.com/" target="_blank" className="button button-outline button-white">Deployed</a>
                </div>
            </div>
            
        </div>
    </div>

        // <div className="container-port">
        //     <div className="blue">
        //         <div className="row">
        //             <div className="col-md-10">
        //                 <h1 className="title">Pokedex</h1>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-md-10">
        //                 <p>The Pokedex served as my second project for the bootcamp. This was the very first full stack application I built in the class.
        //                 In this project I worked to build the app using the MVC paradaigm. I was responsible for building my own server side API as well.
        //                 THis project also served as my first time working with linting tools. The app uses a web based API called PokedexAPI which supplied most of the
        //                 images and data points. I built API routes to store user data as well as the data (pokemon) associated to their user id.
        //                 Overall this project was alot of fun and very nostalgic. </p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-md-10">
        //                 <img src={Example3} alt="pokedex" className="image3" />
        //             </div>
        //         </div>
        //         <a href="https://github.com/sharkattack182/project-2" target="_blank" className="button button-outline button-white">Github</a>
        //     </div>
        // </div>






    )
}

export default Port3;