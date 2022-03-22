import React from 'react';
import dashboardimage from '../assets/dashboardimage.png';

const Intro = ()=>{
return (
    <div className="wrapper">
        <div className = "container" >
             <div className = "about" id="home">
                    <p className= "name">Hi, I'm </p><h1><strong>Harikrishna</strong></h1>
                    <p className="role">Full Stack developer</p>
                    <p className="description">
                    Growth Hacking: from brainstorming and research to Application development,<br/> data collection, measurement and analysis, <br/>to rethink and tweaks learning from data acquired. <br/>Coding skills: Javascript, PHP, MySql, reactjs, Ajax, HTML, CSS, jQuery, basics of nodejs
                    </p>
                    <div className="contact-info">
                        <span className="resume">
                            Resume
                        </span>
                        <span className="contact">
                            Contact me
                        </span>
                    </div>
                    <div className = "profile" >
                          <img className = "profile-image" src={dashboardimage} alt="dimage"/>
                    </div> 
               </div>
         </div>
   </div>
);
}

export default Intro;
