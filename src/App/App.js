import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';
import { connect } from 'react-redux';
import HeaderNav from '../headerNav/headerNav';
import PostSection from '../postSection/postSection';
import Login from '../login/login';
import Poll from '../poll/poll';
import Signup from '../login/signup';
import PollPage from '../pollPage/pollPage'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import * as actions from '../store/actions/auth';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tag: null
    }
    this.getTag = this.getTag.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  getTag(val){
    this.setState({
      tag: val
    })
  }

  handleClick(event) {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderNav {...this.props} sendTag={this.getTag}/>
          <Grid fluid>
            <Row className="show-grid">
              <Col className="side" xs={6} md={2}>
                <AutoAffix viewportOffsetTop={50} container={this}>
                  <div className="sideContent">
                    <Button className="pollButton" bsStyle="large" bsStyle="primary" onClick={this.handleClick} block>Create Poll</Button>
                    <Poll open={this.state.open} handler={this.handleClick}/>
                  </div>
                </AutoAffix>
              </Col>
              <Col className="main" xs={6} md={10}>
                <Route path="/" exact render={(props)=>(<PostSection {...props} tag={this.state.tag}/>) }/>
                <Route path="/poll/:pollid" render={(props)=>(<PollPage {...props}/>) }/>
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.reducer.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);