import React, { Component } from "react";
import Button from "../buttons/button"

import "./card.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="card-wrapper">
            <div className="title-top" style={{display:this.props.titleTop ? "flex" : "none"}}>
              <div className="title" style={{display:this.props.title?"block":"none", marginTop:"20px"}}>
                {this.props.title}
              </div>
              <div className="time" style={{display:this.props.time?"block":"none", marginTop:"7px", marginBottom:"20px"}}>
                {this.props.time}
              </div>
                
            </div>
             <div className="hero-image" style={{display:this.props.hero?"":"none",backgroundImage:`url(${this.props.hero})`, backgroundColor:this.props.color, borderTopLeftRadius:this.props.titleTop ? 0 :"inherit", borderTopRightRadius:this.props.titleTop ? 0 :"inherit"}}>
             </div>
             <div classname="card-content">
              <div className="time" style={{display:this.props.time ? !this.props.titleTop ? "block" : "none":"none"}}>
                {this.props.time}
              </div>
              <div className="title" style={{display:this.props.title ? !this.props.titleTop ? "block" : "none":"none"}}>
                {this.props.title}
              </div>
              <div className="card-copy" style={{display:this.props.cardCopy?"block":"none", marginTop:this.props.titleTop?20:7}}>
                {this.props.cardCopy}
              </div>              
              <div className="links" style={{display:this.props.links || this.props.profileImage||this.props.userTitle ||this.props.profileImage?"flex":"none"}}>
              <div className="profile-wrapper" style={{display:this.props.userName || this.props.userTitle ||this.props.profileImage?"flex":"none"}}>
              <div className="profile-image" style={{display:this.props.profileImage?"block":"none", backgroundImage:`url(${this.props.profileImage})`}}/>
              <div className="profile-details">
                  <span className="profile-name"style={{display:this.props.userName?"":"none"}}>{this.props.userName}</span>
                  <span className="profile-title"style={{display:this.props.userTitle?"":"none"}}>{this.props.userTitle}</span>
              </div>
              </div>
                {this.props.links?this.props.links.map(cardLink=>{
                    return(
                    <Button 
                        link={cardLink.link?cardLink.link:"#"} 
                        target={cardLink.target?cardLink.target:"blank"} 
                        buttonClass={cardLink.class?cardLink.class:"tertiary-button"}
                        buttonText={cardLink.text} 
                        buttonIcon={cardLink.icon}
                    />                
                    )
                }):""}
              </div>
             </div>
            </div>
        )
    }
}
export default Card 