import React, { Component } from 'react';
import default_image from '../resources/default-img.png';
import Image from 'react-bootstrap/Image';

function Navbar() {
    return(
        <div className="navbar-container">

            {/* TODO: figure out how to add an image in React  */}
            {/* <Image src="./resources/default-img.png"/> */}
            {/* <img src='' className="img-website"></img> */}
            {/* TODO:set the image with react image component or figure out how to solve your issue*/}

            <div className="navbar-container buttons">
                <div className="nav-btn">Главная</div>
                <div className="nav-btn">Услуги <div>*insert arrow*</div></div>
                <div className="nav-btn">Наши роботы</div>
                <div className="nav-btn">О нас</div>
                <div className="nav-btn">Контакты</div>
            </div>
            <div className="search-and-lang">
                <img src="" alt="" className="search-icon"/>
                <div className="lang-pic-and-select">
                    <div className="lang-divs">
                        Language divs
                    </div>
                    <div className="select">
                        *inser arrow*
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Navbar;