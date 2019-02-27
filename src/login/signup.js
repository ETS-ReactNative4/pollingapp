import React, { Component } from "react";
import { HelpBlock, FormGroup, FormControl, ControlLabel, Button, Modal} from "react-bootstrap";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAuth(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
    
  }

  render() {
    return (
        <Modal bsSize="large" className="signupModal" show={this.props.open} onHide={this.props.handler}>
          <Modal.Body className="signupBody">
            <div className="Signup">        
                <form onSubmit={this.handleSubmit}>
                    
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                        autoFocus
                        type="text"
                        value={this.state.username}
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        value={this.state.email}
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
                    <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                        value={this.state.confirmPassword}
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
                        Signup
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
    onAuth: (username, email, password, confirmPassword) => dispatch(actions.authSignup(username, email, password, confirmPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);