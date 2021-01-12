import React from "react";
import './portfolio.css';
import img1 from './imgs/equippe.png'
import img2 from './imgs/employee.png'
import img3 from './imgs/pokedex.png'


function Portfolio() {
    return (
        <div className="container-custom">
            <div className="portfolio">
                <h1 className="heading">Portfolio</h1>
                <div className="row clear">
                    <div className="col-lg-4 seperate">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front equippe">
                                    <div className="cardContainer">
                                        <div className="cardName">
                                            <h3>EquiPPE</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">EquiPPE</h4>
                                        <p className="projectDesc">EquiPPE is a react.js based app that functions as an e-commerce site for users to buy PPE. It was my final project for my bootcamp. </p>
                                        <div className="functionalButtons">
                                        <a href="/port1/" id="btn" className="button button-outline button-white">More Info</a>
                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 seperate">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front classmate">
                                    <div className="cardContainer">
                                        <div className="cardName">
                                            <h3>Classmate Tracker</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Classmate Tracker</h4>
                                        <p className="projectDesc">The classmate tracker is a react.js app that allows users to search and filter through a list of classmates.</p>
                                        <div className="functionalButtons">
                                        <a href="/port2/" id="btn" className="button button-outline button-white">More Info</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="row clear">
                    <div className="col-lg-4 seperate">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front pokedex">
                                    <div className="cardContainer">
                                        <div className="cardName">
                                            <h3>Pokedex</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Pokedex</h4>
                                        <p className="projectDesc">The Pokedex project uses the pokemon API and sequelize to allow a user to add pokemon to thier pokedex.</p>
                                        <div className="functionalButtons">
                                        <a href="/port3/" id="btn" className="button button-outline button-white">More Info</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 seperate">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front geo-snacks">
                                    <div className="cardContainer">
                                        <div className="cardName">
                                            <h3>Geo Snacks</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Geo Snacks</h4>
                                        <p className="projectDesc">Geo snacks is an API based app that alerts the user to restaurants near by based of a users input.</p>
                                        <div className="functionalButtons">
                                        <a href="https://github.com/sharkattack182" id="btn" className="button button-outline button-white">More Info</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
                <p className="port">These are a few projects from my bootcamp. I currently have a few other projects in the works. To see my other work please check out my GitHub at the link below.</p>
                <a href="https://github.com/sharkattack182" id="btn" className="button button-outline button-white">GitHub</a>
            </div>
        </div>



    )
}

export default Portfolio;