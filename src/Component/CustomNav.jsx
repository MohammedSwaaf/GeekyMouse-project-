import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNav.css';

class CustomNav extends Component {
  render() {
    return (

      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">GeekyMouse</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href='/home' to='/home'>
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href='/about' to='/about'>
            Forgiveness
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href='/news' to='/news'>
              PressKit
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href='/news' to='/news'>
              Screens
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href='/news' to='/news'>
              Contact me
            </NavItem>

            {/*<NavItem eventKey={4} componentClass={Link} href='/' to='/'>
              Log In
      </NavItem>*/}

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default CustomNav;