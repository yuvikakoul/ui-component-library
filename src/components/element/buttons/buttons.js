import React, { Component } from "react";

import Button from "./button"
import "./buttons.css"

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{padding:"5vw"}}>
                <div>
                    <div className="section-wrapper">
                        <div className="section-title">Primary buttons</div>
                        <div className="section-row">
                            <div className="row-title">Simple buttons</div>
                            <div className="row-buttons">
                                <Button buttonClass="primary-button" buttonText="Primary Button"/>
                                <Button buttonClass="primary-button-disabled" buttonText="Button Disabled"/>
                                <Button buttonClass="primary-button-ghost" buttonText="Button Ghost"/>
                                <Button buttonClass="primary-button-ghost-disabled" buttonText="Ghost Disabled"/>
                            </div>
                            <div className="row-buttons">
                                <Button buttonClass="primary-button emerald-green" buttonText="Primary Button"/>
                                <Button buttonClass="primary-button-disabled" buttonText="Button Disabled"/>
                                <Button buttonClass="primary-button-ghost emerald-green" buttonText="Button Ghost"/>
                                <Button buttonClass="primary-button-ghost-disabled" buttonText="Ghost Disabled"/>
                            </div>
                            <div className="row-buttons">
                                <Button buttonClass="primary-button peachish" buttonText="Primary Button"/>
                                <Button buttonClass="primary-button-disabled" buttonText="Button Disabled"/>
                                <Button buttonClass="primary-button-ghost peachish" buttonText="Button Ghost"/>
                                <Button buttonClass="primary-button-ghost-disabled" buttonText="Ghost Disabled"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Buttons with icons</div>
                            <div className="row-buttons">
                                <Button buttonClass="primary-button" buttonText="Primary Button" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="primary-button-disabled" buttonText="Button Disabled" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="primary-button-ghost" buttonText="Button Ghost" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="primary-button-ghost-disabled" buttonText="Ghost Disabled" buttonIcon={['fas', 'download']}/>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="section-title">Secondary buttons</div>
                        <div className="section-row">
                            <div className="row-title">Simple buttons</div>
                            <div className="row-buttons">
                                <Button buttonClass="secondary-button" buttonText="Secondary Button"/>
                                <Button buttonClass="secondary-button-disabled" buttonText="Button Disabled"/>
                                <Button buttonClass="secondary-button-ghost" buttonText="Button Ghost"/>
                                <Button buttonClass="secondary-button-ghost-disabled" buttonText="Ghost Disabled"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Buttons with icons</div>
                            <div className="row-buttons">
                                <Button buttonClass="secondary-button" buttonText="Secondary Button" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="secondary-button-disabled" buttonText="Button Disabled" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="secondary-button-ghost" buttonText="Button Ghost" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="secondary-button-ghost-disabled" buttonText="Ghost Disabled" buttonIcon={['fas', 'download']}/>
                            </div>
                            <div className="row-buttons">
                                <Button buttonClass="secondary-button emerald-green" buttonText="Secondary Button" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="secondary-button-disabled" buttonText="Button Disabled" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="secondary-button-ghost emerald-green" buttonText="Button Ghost" buttonIcon={['fas', 'download']}/>
                                <Button buttonClass="secondary-button-ghost-disabled" buttonText="Ghost Disabled" buttonIcon={['fas', 'download']}/>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="section-title">Tertiary links</div>
                        <div className="section-row">
                            <div className="row-title">Simple links</div>
                            <div className="row-buttons">
                                <Button buttonClass="tertiary-button" buttonText="Tertiary Link"/>
                                <Button buttonClass="tertiary-button-disabled" buttonText="Link Disabled"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Links with icons</div>
                            <div className="row-buttons">
                                <Button buttonClass="tertiary-button" buttonText="Tertiary link" buttonIcon={['fas', 'external-link-alt']}/>
                                <Button buttonClass="tertiary-button-disabled" buttonText="Link Disabled" buttonIcon={['fas', 'external-link-alt']}/>
                            </div>
                            <div className="row-buttons">
                                <Button buttonClass="tertiary-button peachish" buttonText="Tertiary link" buttonIcon={['fas', 'external-link-alt']}/>
                                <Button buttonClass="tertiary-button-disabled" buttonText="Link Disabled" buttonIcon={['fas', 'external-link-alt']}/>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="section-title">Social buttons</div>
                        <div className="section-row">
                            <div className="row-buttons">
                                <Button buttonClass="social-button" buttonText="Login with Google" buttonIcon={['fab', 'google-plus-g']}/>
                                <Button buttonClass="social-button" buttonText="Login with Facebook" buttonIcon={['fab', 'facebook-square']}/>
                                <Button buttonClass="social-button" buttonText="Login with Twitter" buttonIcon={['fab', 'twitter']}/>
                                <Button buttonClass="social-button" buttonText="Login with Instagram" buttonIcon={['fab', 'instagram']}/>
                                <Button buttonClass="social-button" buttonText="Login with LinkedIn" buttonIcon={['fab', 'linkedin']}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Buttons