import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from './StyledSideNav';
import {browserHistory} from 'react-router'

const navWidthCollapsed = 64;
const navWidthExpanded = 280;

const NavHeader = styled.div`
    display: ${props => (props.expanded ? 'block' : 'none')};
    white-space: nowrap;
    background-color: #db3d44;
    color: #fff;
    > * {
        color: inherit;
        background-color: inherit;
    }
`;

// height: 20px + 10px + 10px = 40px
const NavTitle = styled.div`
    font-size: 2em;
    line-height: 20px;
    padding: 10px 0;
`;

// height: 20px + 4px = 24px;
const NavSubTitle = styled.div`
    font-size: 1em;
    line-height: 20px;
    padding-bottom: 4px;
`;
const Separator = styled.div`
    clear: both;
    position: relative;
    margin: .8rem 0;
    background-color: #ddd;
    height: 1px;
    color:#222;
`;


class NavBarComponent extends Component {

    state = {
        selected: 'dashboard',
        expanded: false
    };

    lastUpdateTime = new Date().toISOString();

    onSelect = (selected) => {
        this.setState({ selected: selected });
        browserHistory.push("/"+selected)
        window.location.reload(false)
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        const { expanded, selected } = this.state;

        return (
            <div>
                <SideNav
                    style={{ minWidth: expanded ? navWidthExpanded : navWidthCollapsed }}
                    onSelect={this.onSelect}
                    onToggle={this.onToggle}
                >
                    <Toggle />
                    <NavHeader expanded={expanded}>
                        <NavTitle>Side Navigation</NavTitle>
                        <NavSubTitle>Styled Side Navigation</NavSubTitle>
                    </NavHeader>
                    <Nav
                        defaultSelected={selected}
                    >
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-tachometer" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32,color:"#333" }} title="Dashboard">
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="devices">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="DEVICES">
                                DEVICES
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="reports">
                            <NavIcon>
                                <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="REPORTS">
                                REPORTS
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="settings">
                            <NavIcon>
                                <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="SETTINGS">
                                SETTINGS
                            </NavText>
                            <NavItem eventKey="settings/policy">
                                <NavText title="POLICIES">
                                    POLICIES
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="settings/network">
                                <NavText title="NETWORK">
                                    NETWORK
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <Separator />
                        <NavItem eventKey="logout">
                            <NavIcon>
                                <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.5em' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 ,color:"#333"}} title="SIGN OUT">
                                SIGN OUT
                            </NavText>
                        </NavItem>
                    </Nav>
                </SideNav>
            </div>
        );
    }
}

export default NavBarComponent;