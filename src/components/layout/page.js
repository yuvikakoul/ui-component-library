import React, { Component } from "react";

import Navigation from "./navigation";
import Home from "../home";
import Button from "../element/buttons/buttons";
import ColorPallet from "../element/color pallet/color-pallet";
import Typography from "../element/typography/typography";
import Cards from "../element/cards/cards";
import Gallleries from "../element/gallery/galleries";
import FormFields from "../element/form fields/form-fields";

import "./page.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "home"
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
        <div style={{ position: "relative" }}>
          <Navigation
            onSelection={selected => {
              this.onSelection(selected);
            }}
          />
        </div>
        <div className="content">
          {this.state.selected === "home" ? (
            <Home />
          ) : this.state.selected === "components/buttons" ? (
            <Button />
          ) : this.state.selected === "components/color-pallet" ? (
            <ColorPallet />
          ) : this.state.selected === "components/typography" ? (
            <Typography />
          ) : this.state.selected === "components/cards" ? (
            <Cards />
          ) : this.state.selected === "components/gallery" ? (
            <Gallleries />
          ) : this.state.selected === "components/form-fields" ? (
            <FormFields />
          ) : (
            <div>Hello there</div>
          )}
        </div>
      </div>
    );
  }
}

export default Page;
