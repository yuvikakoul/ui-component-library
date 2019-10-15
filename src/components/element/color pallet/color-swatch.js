import React, { Component } from "react";

import "./color-swatch.css"

class ColorSwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.copyColor = this.copyColor.bind(this)
    }

    copyColor(color){
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("id", "dummy_id");
        document.getElementById("dummy_id").value=color;
        dummy.select();
        document.execCommand("copy");
        alert("Copied color code: " + dummy.value);
        document.body.removeChild(dummy);
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <div
                 id="swatch"
                 value={this.props.backgroundColor}
                 className="swatch" 
                 style={{
                     backgroundColor:this.props.backgroundColor,
                     border: this.props.borderColor ? "1px solid"+ this.props.borderColor : "",
                     boxShadow: 
                        this.props.shadowDensity===1 ? 
                        "#29354a54 1px 1px 3px 0px" : 
                        this.props.shadowDensity===2 ? 
                        "#29354a54 2px 2px 6px 0px" :
                        this.props.shadowDensity===3 ? 
                        "#29354a38 4px 4px 10px 0px" : 
                        this.props.shadowDensity===4 ? 
                        "#29354a2e 6px 5px 16px 0px" :""
                    }}
                 onClick= {()=>this.copyColor(this.props.backgroundColor)}
              >
              </div>
              <span className="swatch-text">{this.props.colorText}</span>
            </div>
        )
    }
}
export default ColorSwatch 
