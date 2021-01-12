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
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="cardContainer">
                                        <div class="cardName">
                                            <h3>Hello World</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Project Name</h4>
                                        <p className="projectDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis assumenda sapiente doloremque saepe est alias asperiores fugiat animi blanditiis voluptatum, reiciendis deserunt eius omnis consectetur eos repellendus rerum amet? Obcaecati.</p>
                                        <div className="functionalButtons">
                                            <div className="buttons">More Info</div>
                                            <div className="links">
                                                <div className="buttons gh">Github</div>
                                                <div className="buttons dep">Deployed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 seperate">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="cardContainer">
                                        <div class="cardName">
                                            <h3>Hello World</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Project Name</h4>
                                        <p className="projectDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis assumenda sapiente doloremque saepe est alias asperiores fugiat animi blanditiis voluptatum, reiciendis deserunt eius omnis consectetur eos repellendus rerum amet? Obcaecati.</p>
                                        <div className="functionalButtons">
                                            <div className="buttons">More Info</div>
                                            <div className="links">
                                                <div className="buttons gh">Github</div>
                                                <div className="buttons dep">Deployed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="row clear">
                    <div className="col-lg-4 seperate">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="cardContainer">
                                        <div class="cardName">
                                            <h3>Hello World</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Project Name</h4>
                                        <p className="projectDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis assumenda sapiente doloremque saepe est alias asperiores fugiat animi blanditiis voluptatum, reiciendis deserunt eius omnis consectetur eos repellendus rerum amet? Obcaecati.</p>
                                        <div className="functionalButtons">
                                            <div className="buttons">More Info</div>
                                            <div className="links">
                                                <div className="buttons gh">Github</div>
                                                <div className="buttons dep">Deployed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 seperate">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="cardContainer">
                                        <div class="cardName">
                                            <h3>Hello World</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="cardContainer back">
                                        <h4 className="projectName">Project Name</h4>
                                        <p className="projectDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis assumenda sapiente doloremque saepe est alias asperiores fugiat animi blanditiis voluptatum, reiciendis deserunt eius omnis consectetur eos repellendus rerum amet? Obcaecati.</p>
                                        <div className="functionalButtons">
                                            <div className="buttons">More Info</div>
                                            <div className="links">
                                                <div className="buttons gh">Github</div>
                                                <div className="buttons dep">Deployed</div>
                                            </div>
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

        // Notes

        // {/* <div className="card">
        //     <div className="image image1"></div>
        //     <div className="content">
        //         <div className="header">EquiPPE</div>
        //         <div className="meta">Matthew Courtney</div>
        //         <div className="description">EquiPPE is an ecommerce site. IT was created as the final project for my Bootcamp. Please click the link below for more information.</div>
        //         <a href="https://vast-ravine-19894.herokuapp.com/" target="_blank"><button type="button"
        //             class="btn btn-info zoom"><i class="fas fa-link"></i></button></a>
        //         <a href="https://github.com/sharkattack182/project-3" target="_blank"><button type="button"
        //             class="btn btn-info zoom"><i class="fab fa-github"></i></button></a>
        //         <br />
        //         <a href="/port1"><button type="button"
        //             class="btn btn-info zoom">More Info</button></a>
        //     </div>
        // </div> */}
        //                        {/* <div className="card">
        //     <div className="image image3"></div>
        //     <div className="content">
        //         <div className="header">Pokedex</div>
        //         <div className="meta">Matthew Courtney</div>
        //         <div className="description">The Pokedex project was my first experience using APIs. It was my second project for my bootcamp. Please click the link below for more info.</div>
        //         <a href="https://vast-escarpment-44555.herokuapp.com/" target="_blank"><button type="button"
        //             class="btn btn-info zoom"><i class="fas fa-link"></i></button></a>
        //         <a href="https://github.com/sharkattack182/react-employee" target="_blank"><button type="button"
        //             class="btn btn-info zoom"><i class="fab fa-github"></i></button></a>
        //         <br />
        //         <a href="/port3"><button type="button"
        //             class="btn btn-info zoom">More Info</button></a>
        //     </div>
        // </div> */}
        // {/* <div className="card">
        //     <div className="image image2"></div>
        //     <div className="content">
        //         <div className="header">Classmate Tracker</div>
        //         <div className="meta">Matthew Courtney</div>
        //         <div className="description">The classmate tracker is a react app that I used to gather contact information for the students in my class to help everyone easily connect. Please click the link below for more info.</div>
        //         <a href="https://powerful-lowlands-68943.herokuapp.com/" target="_blank"><button type="button"
        //             class="btn btn-info zoom"><i class="fas fa-link"></i></button></a>
        //         <a href="https://github.com/sharkattack182/react-employee" target="_blank"><button type="button"
        //             class="btn btn-info zoom"><i class="fab fa-github"></i></button></a>
        //         <br />
        //         <a href="/port2"><button type="button"
        //             class="btn btn-info zoom">More Info</button></a>
        //     </div>
        // </div> */}

    )
}

export default Portfolio;