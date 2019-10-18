import React, { Component } from "react";

import "./button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
            <form action={this.props.link} method="get" target={this.props.target}>
              <button 
                 className={this.props.buttonClass} 
                 style={{
                      margin:10, 
                      display:"flex", 
                      flexDirection:"row"
                    }}
                 type="submit"
              >
                <span>{this.props.buttonText}</span>
                {this.props.buttonIcon?<span style={{paddingLeft:this.props.buttonClass.includes("tertiary")?10:20, color:this.props.buttonIcon.includes("facebook-square")?"#3b5998":this.props.buttonIcon.includes("google-plus-g")?"#dd4b39":this.props.buttonIcon.includes("instagram")?"#517fa4":this.props.buttonIcon.includes("twitter")?"#00aced":this.props.buttonIcon.includes("linkedin")?"#007bb6":""}}><FontAwesomeIcon icon={this.props.buttonIcon}/></span>:""}
              </button>
              </form>
            </>
        )
    }
}
export default Button
