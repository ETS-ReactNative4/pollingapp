import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.username.length > 4 && this.state.password.length > 8;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!this.props.error) {
      this.props.onAuth(this.state.username, this.state.password)
      this.props.handler(event)
    }
  }

  render() {
    return (
        <Modal bsSize="small" className="loginModal" show={this.props.open} onHide={this.props.handler}>
          <Modal.Body className="loginBody">
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.username}
                      placeholder="Enter username"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
              </div>
          </Modal.Body>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);