import React, { Component } from 'react';
import './headerNav.css';
import { Navbar, NavItem, Nav, SplitButton, ButtonToolbar } from 'react-bootstrap';
import PostSection from '../postSection/postSection';
import HamburgerMenu from 'react-hamburger-menu';
import GoogleLogin from 'react-google-login';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import * as actionTypes from '../store/actions/auth';
import { Link } from 'react-router-dom';
import Login from '../login/login';
import Poll from '../poll/poll';
import Signup from '../login/signup';
import TagList from './tagList.js';
import SideBar from '../sideBar/sideBar';

class headerNav extends Component {

  constructor(props){
    super(props);

    this.state = {
      open: false,
      openLogin: false,
      openSignup: false,
      openPoll: false,
      selectedOption: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handlePollClick = this.handlePollClick.bind(this);

  }

  componentDidMount(){
    this.props.getTags()
  }

  handleClick(event) {
    this.setState({
      open: !this.state.open
    })
  }

  handleLoginClick(event) {
    this.setState({
      openLogin: !this.state.openLogin
    })
  }

  handleSignupClick(event){
    this.setState({
      openSignup: !this.state.openSignup
    })
  }

  handlePollClick(event){
    this.setState({
      openPoll: !this.state.openPoll
    })
  }

  handleChange = (selectedOption) => {
      this.setState({
        selectedOption: selectedOption
      })

      this.props.sendTag(selectedOption)
  }

  render() {
    let menuStyle = {
      position: 'relative',
      float: 'left',
      left: '-18%',
      marginTop: '1.5%'
    }

    console.log(this.props)

    return (
    
      <Navbar className="Navigation" fixedTop>
        <Navbar.Header pullLeft>
          <Navbar.Brand>
          <a href="/">polcial.net</a>
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
        {
          this.props.loading ?

          <div>loading...</div>

          :

          <Select
            className="select"
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={this.props.tags}
          />
        }
        <Nav pullRight>
          {
            this.props.isAuthenticated ?

            <div>
              <Nav>
                <NavItem eventKey={3} onClick={this.props.logout}>
                  Logout
                </NavItem>
                <NavItem eventKey={4} onClick={this.handleSignupClick}>
                  Profile
                </NavItem>
              </Nav>
            </div>

            :

            <div>
              <Nav>
                <NavItem eventKey={1} onClick={this.handleLoginClick}>
                  Login
                </NavItem>
                <NavItem eventKey={2} onClick={this.handleSignupClick}>
                  Signup
                </NavItem>
              </Nav>
            </div>
          }
        </Nav>
        <div>
            <SideBar open={this.state.open} handler={this.handleClick}/>
            <Login open={this.state.openLogin} handler={this.handleLoginClick}/>
            <Signup open={this.state.openSignup} handler={this.handleSignupClick}/>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.reducer.token,
    tags: state.tagReducer.tags,
    loading: state.tagReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTags: () => dispatch(actions.getTags()),
    logout: () => dispatch(actionTypes.logout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(headerNav);
