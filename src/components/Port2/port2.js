import React from "react";
import './port2.css';
import Example2 from "./imgs/employee.png"


function Port2() {
    return (

        <div className="container-port">

            <div className="row">
                <div className="col-md-12">
                    <h1 className="title2">Classmate Tracker</h1>
                </div>
            </div>
            <div className="blue">
                <div className="row">
                    <div className="col-md-10">
                        <img src={Example2} alt="classmate" className="image1" />
                        <p className="port-description">The Classmate Tracker was a project during my bootcamp. The idea of the asignment was to break up the application's
                        UI into components, manage the componnt state, and respond to user events. The application uses a JSON package I created using my classmates names and linkedin
                        account address. The assignment recommended we use a personel randomizer application on the web but I decided to
                        take the extra step and create a useful tool that would help my classmates connect.
                        The project was very helpful in learning to work with state in React. At this time, a user can search through the list,
 by name as well as sortable by ID. I would like to add the ability to sort by name as well in the future.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="link-buttons">
                        <a href="https://github.com/sharkattack182/react-employee" target="_blank" className="button button-outline button-white">Github</a>
                        <a href="https://powerful-lowlands-68943.herokuapp.com/" target="_blank" className="button button-outline button-white">Deployed</a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Port2;