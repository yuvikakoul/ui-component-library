import React, { Component } from "react";

import Card from "./card";
import "./cards.css";
import articleImage from "./images/article1.jpg";
import articleImage2 from "./images/article2.jpg";
import articleImage3 from "./images/article3.jpg";
import user from "./images/user_2_800.jpg";
import recipe from "./images/recipe.jpg";
import design from "./images/design.jpg";
import designSystem from "./images/design_system.jpg";
import bratislava from "./images/bratislava.jpg";
import riverSpree from "./images/river_spree.jpg";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ padding: "5vw" }}>
        <div>
          <div className="section-wrapper">
            <div className="section-title">Preview Cards</div>
            <div className="section-row">
              <div className="row-title">Article Cards</div>
              <div className="row-cards">
                <Card
                  hero={articleImage}
                  time="3 hours ago"
                  title="Asymetrical design"
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
                />
                <Card
                  hero={articleImage2}
                  time="2 hours ago"
                  title="Writing for your users"
                  titleTop={true}
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
                />
                <Card
                  hero={articleImage3}
                  time="2 days ago"
                  title="Italian spaghetti with tomato sauce recipe"
                  profileImage={user}
                  userName="Divyendu Singh"
                  userTitle="Fullstack Devloper"
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
              </div>
            </div>
            <div className="section-row">
              <div className="row-title">Cards with actions</div>
              <div className="row-cards">
                <Card
                  hero={recipe}
                  title="A recipe a day challenge"
                  time="2 days ago"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                  links={[
                    {
                      link: "https://yuvikakoul.com",
                      text: "Register for the challenge",
                      class: "secondary-button"
                    }
                  ]}
                />
                <Card
                  hero={design}
                  time="2 hours ago"
                  title="A design article a day"
                  titleTop={true}
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                  links={[
                    {
                      link: "https://yuvikakoul.com",
                      text: "Subscribe now",
                      class: "secondary-button"
                    },
                    {
                      link: "https://yuvikakoul.com",
                      text: "Share",
                      icon: ["fas", "share-alt"],
                      class: "tertiary-button peachish"
                    }
                  ]}
                />
                <Card
                  hero={designSystem}
                  time="2 days ago"
                  title="UI Kit for sale"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                  links={[
                    {
                      link: "https://yuvikakoul.com",
                      text: "Purchase for 15$",
                      icon: ["fas", "credit-card"],
                      class: "secondary-button emerald-green"
                    }
                  ]}
                />
              </div>
            </div>
            <div className="section-row">
              <div className="row-title">Cards with no actions</div>
              <div className="row-cards">
                <Card
                  hero={bratislava}
                  title="A trip to Bratislava"
                  time="2 days ago"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                />
                <Card
                  hero={riverSpree}
                  time="2 hours ago"
                  title="Walking by the river Spree"
                  titleTop={true}
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                />
                <Card
                  hero={user}
                  time="2 days ago"
                  title="Being a foodie"
                  profileImage={user}
                  userName="Divyendu Singh"
                  userTitle="Fullstack Devloper"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                />
              </div>
            </div>
            <div className="section-row">
              <div className="row-title">Cards with no hero</div>
              <div className="row-cards">
                <Card
                  time="2 days ago"
                  title="UI Kit for sale"
                  profileImage={user}
                  userName="Divyendu Singh"
                  userTitle="Fullstack Devloper"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                  links={[
                    {
                      link: "https://yuvikakoul.com",
                      text: "Share",
                      icon: ["fas", "share-alt"],
                      class: "tertiary-button peachish"
                    }
                  ]}
                />
                <Card
                  time="2 days ago"
                  title="UI Kit for sale"
                  profileImage={user}
                  userName="Divyendu Singh"
                  userTitle="Fullstack Devloper"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                  links={[
                    {
                      link: "https://yuvikakoul.com",
                      text: "Tweet",
                      icon: ["fab", "twitter"],
                      class: "social-button"
                    }
                  ]}
                />
                <Card
                  time="2 days ago"
                  title="UI Kit for sale"
                  profileImage={user}
                  userName="Divyendu Singh"
                  userTitle="Fullstack Devloper"
                  cardCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                  links={[
                    {
                      link: "https://yuvikakoul.com",
                      text: "Send hearts",
                      icon: ["fas", "heart"],
                      class: "secondary-button peachish"
                    }
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
export default Cards;
