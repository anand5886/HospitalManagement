import React, { Component } from 'react';
// import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import './HeaderStyle.css';

export class HeaderMenu extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <div className="HeaderDiv">
                    {/* <NavbarBrand tag={Link} to="/">HOSPITAL MANAGEMENT</NavbarBrand> */}
                    <label className="HeaderText">HOSPITAL MANAGEMENT</label>
                </div>
                
            </div>
        );
    }
}