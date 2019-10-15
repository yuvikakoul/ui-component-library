import React, { Component } from "react";

import ColorSwatch from "./color-swatch"
import "./color-pallet.css"

class ColorPallet extends Component {
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
                        <div className="section-title">UI colors</div>
                        <div className="section-row">
                            <div className="row-title">Fill colors</div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#4d92fb" colorText="Cobalt Blue"/>
                                <ColorSwatch backgroundColor="#f0bb56" colorText="Greek Mustard"/>
                                <ColorSwatch backgroundColor="#f89954" colorText="Persian Saffron"/>
                                <ColorSwatch backgroundColor="#fb7469" colorText="Peachish"/>
                                <ColorSwatch backgroundColor="#4dd583" colorText="Emerald Green"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Borders or text fill</div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#196be5" colorText="Electric Blue"/>
                                <ColorSwatch backgroundColor="#d9a030" colorText="Mustard"/>
                                <ColorSwatch backgroundColor="#e87c2e" colorText="Saffron"/>
                                <ColorSwatch backgroundColor="#f04f43" colorText="Peachish Red"/>
                                <ColorSwatch backgroundColor="#27c466" colorText="Clover Green"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Pastel fill</div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#c1d8fb" colorText="Pastel Blue"/>
                                <ColorSwatch backgroundColor="#f7e6c3" colorText="Pastel Mustard"/>
                                <ColorSwatch backgroundColor="#fbdbc4" colorText="Pastel Saffron"/>
                                <ColorSwatch backgroundColor="#fdcdca" colorText="Pastel Red"/>
                                <ColorSwatch backgroundColor="#c0f1d4" colorText="Pastel Green"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Button colors</div>
                            <div className="row-swatch">
                                <ColorSwatch borderColor="#196be5" backgroundColor="#4d92fb" colorText="Cobalt Blue"/>
                                <ColorSwatch borderColor="#f04f43" backgroundColor="#fb7469" colorText="Peachish"/>
                                <ColorSwatch borderColor="#27c466" backgroundColor="#4dd583" colorText="Emerald Green"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Form fields</div>
                            <div className="row-swatch">
                                <ColorSwatch borderColor="#4d92fb" backgroundColor="#fff" colorText="Hovered"/>
                                <ColorSwatch borderColor="#cfd9e2" backgroundColor="#efefef" colorText="Disabled"/>
                                <ColorSwatch borderColor="#869daf" backgroundColor="#fff" colorText="Basic"/>
                                <ColorSwatch borderColor="#fb7469" backgroundColor="#fff" colorText="Error"/>
                                <ColorSwatch borderColor="#f0bb56" backgroundColor="#fff" colorText="Warning"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Message</div>
                            <div className="row-swatch">
                                <ColorSwatch borderColor="#4d92fb" backgroundColor="#a3c7ff" colorText="Info"/>
                                <ColorSwatch borderColor="#4dd583" backgroundColor="#a7eec3" colorText="Success"/>
                                <ColorSwatch borderColor="#fb7469" backgroundColor="#fdb4af" colorText="Error"/>
                                <ColorSwatch borderColor="#f0bb56" backgroundColor="#fbe3b7" colorText="Warning"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Text colors</div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#252d3b" colorText="Headline"/>
                                <ColorSwatch backgroundColor="#35425a" colorText="Sub headline"/>
                                <ColorSwatch backgroundColor="#475264" colorText="Body copy"/>
                                <ColorSwatch backgroundColor="#ABB2BE" colorText="Legal"/>
                                <ColorSwatch backgroundColor="#ecf1fd" colorText="Headline dark BG"/>
                                <ColorSwatch backgroundColor="#d9dee8" colorText="Sub head dark BG"/>
                                <ColorSwatch backgroundColor="#b8bfcd" colorText="Body copy dark BG"/>
                                <ColorSwatch backgroundColor="#9da5b5" colorText="Legal dark BG"/>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Background colors</div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#f7f9ff" colorText="Clouds"/>
                                <ColorSwatch backgroundColor="#29354a" colorText="Midnight"/>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="row-title">Shadows</div>
                            <div className="row-swatch">
                                <ColorSwatch shadowDensity={1} backgroundColor="#fff" colorText="Density 1"/>
                                <ColorSwatch shadowDensity={2}  backgroundColor="#fff" colorText="Density 2"/>
                                <ColorSwatch shadowDensity={3}  backgroundColor="#fff" colorText="Density 3"/>
                                <ColorSwatch shadowDensity={4}  backgroundColor="#fff" colorText="Density 4"/>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="section-title">Illustration colors</div>
                        <div className="section-row">
                            {/* <div className="row-title">Simple buttons</div> */}
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#594e7e" colorText="Violets"/>
                                <ColorSwatch backgroundColor="#df983c" colorText="Saffrons"/>
                                <ColorSwatch backgroundColor="#eeafa4" colorText="Skin tones"/>
                                <ColorSwatch backgroundColor="#665141" colorText="Earthy"/>
                                <ColorSwatch backgroundColor="#d05047" colorText="Reds"/>
                                <ColorSwatch backgroundColor="#9cb45a" colorText="Greens"/>
                                <ColorSwatch backgroundColor="#76cdd5" colorText="Blues"/>
                                <ColorSwatch backgroundColor="#3c4756" colorText="Greys"/>
                                <ColorSwatch backgroundColor="#edabca" colorText="Pinks"/>
                            </div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#7a7198" colorText="Violets 0.8"/>
                                <ColorSwatch backgroundColor="#e5ad63" colorText="Saffrons 0.8"/>
                                <ColorSwatch backgroundColor="#f1bfb6" colorText="Skin tones 0.8"/>
                                <ColorSwatch backgroundColor="#857467" colorText="Earthy 0.8"/>
                                <ColorSwatch backgroundColor="#d9736c" colorText="Reds 0.8"/>
                                <ColorSwatch backgroundColor="#b0c37b" colorText="Greens 0.8"/>
                                <ColorSwatch backgroundColor="#91d7dd" colorText="Blues 0.8"/>
                                <ColorSwatch backgroundColor="#636c78" colorText="Greys 0.8"/>
                                <ColorSwatch backgroundColor="#f1bcd5" colorText="Pinks 0.8"/>
                            </div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#9b95b2" colorText="Violets 0.6"/>
                                <ColorSwatch backgroundColor="#ecc18a" colorText="Saffrons 0.6"/>
                                <ColorSwatch backgroundColor="#f5cfc8" colorText="Skin tones 0.6"/>
                                <ColorSwatch backgroundColor="#a3978d" colorText="Earthy 0.6"/>
                                <ColorSwatch backgroundColor="#e39691" colorText="Reds 0.6"/>
                                <ColorSwatch backgroundColor="#c4d29c" colorText="Greens 0.6"/>
                                <ColorSwatch backgroundColor="#ade1e6" colorText="Blues 0.6"/>
                                <ColorSwatch backgroundColor="#8a919a" colorText="Greys 0.6"/>
                                <ColorSwatch backgroundColor="#f4cddf" colorText="Pinks 0.6"/>
                            </div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#aca6be" colorText="Violets 0.4"/>
                                <ColorSwatch backgroundColor="#efcb9d" colorText="Saffrons 0.4"/>
                                <ColorSwatch backgroundColor="#f6d7d1" colorText="Skin tones 0.4"/>
                                <ColorSwatch backgroundColor="#b2a8a0" colorText="Earthy 0.4"/>
                                <ColorSwatch backgroundColor="#e7a7a3" colorText="Reds 0.4"/>
                                <ColorSwatch backgroundColor="#cdd9ac" colorText="Greens 0.4"/>
                                <ColorSwatch backgroundColor="#bae6ea" colorText="Blues 0.4"/>
                                <ColorSwatch backgroundColor="#9da3aa" colorText="Greys 0.4"/>
                                <ColorSwatch backgroundColor="#f6d5e4" colorText="Pinks 0.4"/>
                            </div>
                            <div className="row-swatch">
                                <ColorSwatch backgroundColor="#cdcad8" colorText="Violets 0.2"/>
                                <ColorSwatch backgroundColor="#f5e0c4" colorText="Saffrons 0.2"/>
                                <ColorSwatch backgroundColor="#fae7e4" colorText="Skin tones 0.2"/>
                                <ColorSwatch backgroundColor="#d1cac6" colorText="Earthy 0.2"/>
                                <ColorSwatch backgroundColor="#f1cac7" colorText="Reds 0.2"/>
                                <ColorSwatch backgroundColor="#e1e8cd" colorText="Greens 0.2"/>
                                <ColorSwatch backgroundColor="#d6f0f2" colorText="Blues 0.2"/>
                                <ColorSwatch backgroundColor="#c4c7cc" colorText="Greys 0.2"/>
                                <ColorSwatch backgroundColor="#fae6ef" colorText="Pinks 0.2"/>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
        )
    }
}
export default ColorPallet