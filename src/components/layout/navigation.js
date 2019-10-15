import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import './navigation.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <SideNav
                    onSelect={(selected) => {
                        this.props.onSelection(selected)
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                            <FontAwesomeIcon icon="home" />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="components">
                            <NavIcon>
                                <FontAwesomeIcon icon={"th"} />
                            </NavIcon>
                            <NavText>
                                Components
                            </NavText>
                            <NavItem eventKey="components/buttons">
                                <NavText>
                                    Buttons
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="components/color-pallet">
                                <NavText>
                                    Color Pallet
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="components/typography">
                                <NavText>
                                    Typography
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>            
            </>
        );
    }
}

export default Navigation;