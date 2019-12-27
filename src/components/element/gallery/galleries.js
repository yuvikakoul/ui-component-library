import React, { Component } from "react";

import Gallery from "./gallery";
import Card from "../cards/card";

import "./galleries.css";

import articleImage from "../cards/images/article1.jpg";
import articleImage2 from "../cards/images/article2.jpg";
import articleImage3 from "../cards/images/article3.jpg";
import user from "../cards/images/user_2_800.jpg";
import recipe from "../cards/images/recipe.jpg";
import design from "../cards/images/design.jpg";
import designSystem from "../cards/images/design_system.jpg";
import bratislava from "../cards/images/bratislava.jpg";
import riverSpree from "../cards/images/river_spree.jpg";

class Galleries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ padding: "5vw" }}>
        <div>
          <div className="section-wrapper">
            <div className="section-title">Preview gallery</div>
            <div className="section-row">
              <div className="row-title">Article Card gallery</div>
              <div className="row-gallery">
                <Gallery
                  cards={[
                    <Card
                      hero={articleImage}
                      cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                      links={[
                        {
                          link: "https://yuvikakoul.com",
                          text: "Learn more"
                        },
                        {
                          link: "https://yuvikakoul.com",
                          text: "Blog post",
                          icon: ["fas", "external-link-alt"],
                          class: "tertiary-button emerald-green"
                        }
                      ]}
                    />,
                    <Card
                      hero={articleImage2}
                      cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                      links={[
                        {
                          link: "https://yuvikakoul.com",
                          text: "Learn more"
                        },
                        {
                          link: "https://yuvikakoul.com",
                          text: "32",
                          icon: ["fas", "heart"],
                          class: "tertiary-button peachish"
                        }
                      ]}
                    />,
                    <Card
                      hero={articleImage3}
                      cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                      links={[
                        {
                          link: "https://yuvikakoul.com",
                          text: "12 comments",
                          icon: ["fas", "comment-alt"],
                          class: "tertiary-button"
                        }
                      ]}
                    />
                  ]}
                />
              </div>
            </div>
            <div className="section-row">
              <div className="row-title">Image gallery</div>
              <div className="row-gallery">
                <Gallery
                  cards={[
                    <Card hero={articleImage} isOnlyImage={true} />,
                    <Card hero={articleImage2} isOnlyImage={true} />,
                    <Card hero={articleImage3} isOnlyImage={true} />,
                    <Card hero={bratislava} isOnlyImage={true} />,
                    <Card hero={riverSpree} isOnlyImage={true} />
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Galleries;
