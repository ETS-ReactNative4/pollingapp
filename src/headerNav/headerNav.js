import React, { Component } from 'react';
import './headerNav.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import HamburgerMenu from 'react-hamburger-menu';
import SideBar from '../sideBar/sideBar';

class headerNav extends Component {

  constructor(props){
    super(props);

    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    let menuStyle = {
      position: 'relative',
      float: 'left',
      left: '-18%',
      marginTop: '1.5%'
    }
    return (
      <Navbar className="Navigation">
        <Navbar.Header pullLeft>
          <Navbar.Brand>
          <a href="#">polcial.net</a>
          </Navbar.Brand>
        </Navbar.Header>
        <div style={menuStyle}>
          <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width= {25}
              height= {18}
          />
        </div>
        <Nav pullRight>
          <NavItem href="#">
            Login
          </NavItem>
          <NavItem href="#">
            Signup
          </NavItem>
        </Nav>
        <div>
          <SideBar open={this.state.open} handler={this.handleClick}/>
        </div>
      </Navbar>
    );
  }
}

export default headerNav;
