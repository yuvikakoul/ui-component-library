import React, { Component } from "react";

import Type from "./type"
import "./typography.css"

class Typography extends Component {
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
                        <div className="section-title">Fonts</div>
                        <div className="section-row">
                            <div className="row-fonts">
                               <Type 
                                    fontClass="font-tile" 
                                    fontSize={42} 
                                    wrapper="font-wrapper"
                                    font="Helvetica neue" 
                                    fontWeight="200"
                                    text="Aa"
                               />
                    
                                <Type 
                                    fontClass="font-tile" 
                                    fontSize={42} 
                                    wrapper="font-wrapper"
                                    font="Helvetica neue" 
                                    fontWeight="regular"
                                    text="Aa"
                               />
                               <Type 
                                    fontClass="font-tile" 
                                    fontSize={42} 
                                    wrapper="font-wrapper"
                                    font="Helvetica neue" 
                                    fontWeight="500"
                                    text="Aa"
                               />
                                <Type 
                                    fontClass="font-tile" 
                                    fontSize={42} 
                                    wrapper="font-wrapper"
                                    font="Helvetica neue" 
                                    fontWeight="bold"
                                    text="Aa"
                               />
                                <Type 
                                    fontClass="font-tile" 
                                    fontSize={42} 
                                    wrapper="font-wrapper"
                                    font="Roboto" 
                                    fontWeight="lighter"
                                    text="Aa"
                               />
                                 <Type 
                                    fontClass="font-tile" 
                                    fontSize={42} 
                                    wrapper="font-wrapper"
                                    font="Arial" 
                                    fontWeight="regular"
                                    text="Aa"
                               />
                            </div>
                        </div>
                        
                    </div>
                    <div className="section-wrapper">
                        <div className="section-title">Font sizes</div>
                        <div className="section-row">
                            <div className="row-title">Headlines</div>
                            <div className="row-headlines">
                            <Type 
                                fontColor="#252d3b"
                                fontClass="text-tile" 
                                fontSize={42} 
                                type="H1"
                                wrapper="text-wrapper"
                                font="Helvetica neue" 
                                fontWeight="200"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                            <Type 
                                fontColor="#35425a"
                                fontClass="text-tile" 
                                fontSize={30} 
                                wrapper="text-wrapper"
                                type="H2"
                                font="Helvetica neue" 
                                fontWeight="regular"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                            <Type 
                                fontColor="#35425a"
                                fontClass="text-tile" 
                                fontSize={20} 
                                wrapper="text-wrapper"
                                type="H3"
                                font="Helvetica neue" 
                                fontWeight="bold"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                             <Type 
                                fontColor="#35425a"
                                fontClass="text-tile" 
                                fontSize={18} 
                                wrapper="text-wrapper"
                                type="H4"
                                font="Helvetica neue" 
                                fontWeight="regular"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                               
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="row-title">Body</div>
                            <div className="row-headlines">
                            <Type 
                                fontColor="#475264"
                                fontClass="text-tile" 
                                fontSize={16} 
                                wrapper="text-wrapper"
                                type="Body copy"
                                font="Helvetica neue" 
                                fontWeight="regular"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                            <Type 
                                fontColor="#475264"
                                fontClass="text-tile" 
                                fontSize={14} 
                                wrapper="text-wrapper"
                                type="Body copy small"
                                font="Helvetica neue" 
                                fontWeight="regular"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                             <Type 
                                fontColor="#ABB2BE"
                                fontClass="text-tile" 
                                fontSize={12} 
                                wrapper="text-wrapper"
                                type="Legal"
                                font="Roboto" 
                                fontWeight="regular"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                            <Type 
                                fontColor="#475264"
                                fontClass="text-tile" 
                                fontSize={14} 
                                wrapper="text-wrapper"
                                type="Button text"
                                font="Helvetica neue" 
                                fontWeight="500"
                                text="The quick brown fox jumps over the lazy dog."
                            />
                             <Type 
                                fontColor="#475264"
                                fontClass="text-tile" 
                                fontSize={16} 
                                wrapper="text-wrapper"
                                type="Numbers and symbols"
                                font="Arial" 
                                fontWeight="regular"
                                text="+0987654321*()&%"
                            />
                            </div>
                  
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Typography