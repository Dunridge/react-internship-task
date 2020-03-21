import React, { Component } from 'react';
import default_image from '../resources/default-img.png';
import Image from 'react-bootstrap/Image';
// import {ReactComponent as FacebookLogoSvg } from "./resources/facebook-app-logo.svg";
import {ReactComponent as RSFlagSvg} from '../resources/russian-flag.svg'
import {ReactComponent as UKFlagSvg} from '../resources/uk.svg'
import {ReactComponent as UAFlagSvg} from '../resources/ukrainian-flag.svg'


function Navbar() {
    return(
        <div className="navbar-container">

            <img src={default_image}/>

            <div className="navbar-container buttons">
                <div className="nav-btn"><h3>Главная</h3></div>
                <div className="nav-btn"><h3>Услуги</h3></div>
                <div className="nav-btn"><h3>Наши роботы</h3></div>
                <div className="nav-btn"><h3>О нас</h3></div>
                <div className="nav-btn"><h3>Контакты</h3></div>
            </div>
            <div className="search-and-lang">
                <img src="" alt="" className="search-icon"/>
                <div className="lang-pic-and-select">
                    <div className="lang-divs">
                        <h3>Languages</h3>
                    </div>
                    <div className="select">
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Navbar;