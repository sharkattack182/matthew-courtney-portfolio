import React from "react";
import './port1.css';
import Example from "./imgs/equippe.png"


function Port1() {
    return (
        <div className="container-port">

            <div className="row">
                <div className="col-md-10">
                    <h1 className="title">EquiPPE</h1>
                </div>
            </div>
            <div className="blue">
                <div className="row">
                    <div className="col-md-10">
                    <img src={Example} alt="equippe" className="image1" />
                        <p className= "port-description">EquiPPE served as my final project for my bootcamp. The idea behind the project was to build an ecommerce site. I worked with a team of three other students. I was responsible for architecting the overall project design including managing the team respository and delegating initail responsibilities for each team member. I worked on the backend by creating and integrating the database using sequelize. I also took on the responsibility of defining the server side routes and controllers using Express. After an MVP was met I also went through and stylized the final product using HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
                <div className="row row1">
                    <div className= "link-buttons">
                    <a href="https://github.com/sharkattack182/project-3" target="_blank" className="button button-outline button-white">Github</a>
                <a href="https://vast-ravine-19894.herokuapp.com/" target="_blank" className="button button-outline button-white">Deployed</a>
                    </div>
                </div>
                
            </div>
        </div>





    )
}

export default Port1;