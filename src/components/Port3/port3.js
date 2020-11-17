import React from "react";
import './port3.css';
import Example3 from "./imgs/pokedex.png"

function Port3() {
    return (
        <div className="container-port">
        <div className="blue">
        <div className="row">
            <div className="col-md-10">
                <h1 className="title">Pokedex</h1>
            </div>
        </div>
            <div className="row">
                <div className="col-md-10">
                    <p>EquiPPE served as my final project for my bootcamp. The idea behind the project was to build an ecommerce site. I worked with a team of three other students. I was responsible for architecting the overall project design including managing the team respository and delegating initail responsibilities for each team member. I worked on the backend by creating and integrating the database using sequelize. I also took on the responsibility of defining the server side routes and controllers using Express. After an MVP was met I also went through and stylized the final product using HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <img src={Example3} alt="pokedex" className="image3"/> 
                </div>
            </div>
            <a href="https://github.com/sharkattack182/project-2" target="_blank" className="button button-outline button-white">Github</a>
        </div>
    </div>






    )
}

export default Port3;