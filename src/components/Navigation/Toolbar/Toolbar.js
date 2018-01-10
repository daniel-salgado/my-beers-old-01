import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const toolbar = (props) => (

    //<Navbar inverse collapseOnSelect>
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">My Beers</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">
                    My Beer List
				</NavItem>
                <NavItem eventKey={2} href="#">
                    New Beer
				</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    My Name
				</NavItem>
                <NavItem eventKey={2} href="#">
                    Sign in/Sign out
				</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default toolbar;