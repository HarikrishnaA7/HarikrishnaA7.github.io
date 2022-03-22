import React from 'react';

const Header =()=>{
  return  (<header className="App-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="header">
            <div className="logoDiv">
               <a href="#default" className="logo">HK</a>
            </div>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    </header>);
}
export default Header;
