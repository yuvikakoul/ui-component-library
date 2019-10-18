import React, { Component } from "react";

import gradient from "./images/gradient.svg"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import star from "./images/star.png"
import chart from "./images/chart.png"
import dev from "./images/dev.png"
import guy from "./images/guy.png"
import lady from "./images/LADY.png"
import video from "./images/video.png"
import logo from "./images/logo.png"

import Button from "./element/buttons/button.js"

import "./home.css"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <> 
            <div className="logo-bar"><img src={logo} alt="Sekei components"/></div>  
            <div className="hero-banner" style={{backgroundImage:`url(${gradient})`}}>
                <div className="illustration-wrapper">
                    <img className="star" src={star} alt="star component"/>
                    <img className="img1" src={img1} alt="img1 component"/>
                    <img className="img2" src={img2} alt="img2 component"/>
                    <img className="dev" src={dev} alt="dev component"/>
                    <img className="chart" src={chart} alt="chart component"/>
                    <img className="video" src={video} alt="video component"/>
                    <img className="lady" src={lady} alt="lady component"/>
                    <img className="guy" src={guy} alt="guy component"/>
                </div>
            </div>
            <div className="hero-banner-wrapper">   
            <span className="hero-title">SEKEI UI</span>
            <span className="hero-copy"><strong>SEKEI UI </strong>is a react based UI component library. The components are built on minimalistic design principles and can be customized to help you to create projects as quickly as possible.</span>
            <span className="hero-info">This is an open source project, please feel free to contribute by raising a pull request</span>
            <Button style={{marginLeft:50}} link="https://github.com/yuvikakoul/ui-component-library" target="blank" buttonClass="secondary-button peachish" buttonText="Contribute on GitHub" buttonIcon={['fab', 'github']}/>
            </div>

            </>
        )
    }
}
export default Home