import React, { Component } from "react";

import "./type.css"

class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
             <div style={{
                 fontFamily:this.props.font
                 }}
                 className={this.props.wrapper}
             >
                 <span style={{
                        fontFamily:this.props.font, 
                        fontSize:this.props.fontSize ,
                        fontWeight:this.props.fontWeight,
                        color:this.props.fontColor,
                    }} 
                    className={this.props.fontClass}
                >
                  <span 
                  className="text-type" 
                  style={{
                      display:this.props.type ? "inline" : "none",
                      borderRight:this.props.type ? "1px solid #8f99a7" : ""
                      }}
                  >
                  {this.props.type}
                  </span> 
                   {this.props.text}
                </span>
                
                 <span className="font-text">{this.props.font}</span>
                 <span className="font-weight">{this.props.fontWeight}</span>
             </div>
            </>
        )
    }
}
export default Type
