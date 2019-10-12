import React, { Component } from "react";

import Navigation from "./navigation";
import Home from "../home";
import Button from "../element/buttons/buttons"

import './page.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:"home"
        };
        this.onSelection = this.onSelection.bind(this);
    }

    onSelection(selected) {
        this.setState({
            selected: selected
        });
    }

    render() {
        return (
            <div className="page-wrapper">
             <Navigation
              onSelection = {(selected)=>{
                  this.onSelection(selected)
              }}
             /> 
             <div className="content">
             {this.state.selected === "home"?<Home/>:
             this.state.selected === "components/buttons"?<Button/>:<div>Hello there</div>}
             </div>
            </div>
        );
    }
}

export default Page;