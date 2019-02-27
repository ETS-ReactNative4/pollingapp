import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import Select from 'react-select';
import axios from 'axios';
import "./poll.css";

class Poll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      tag: '',
    };
  }

  componentDidMount(){
    this.props.getTags()
  }

  validateForm() {
    return this.state.question.length > 0 && this.state.option1.length > 0 && this.state.option2.length > 0 && this.state.tag !== '';
  }

  handleChange = event => {
    //Checks if value came from Select
    this.setState({
      [event.target.id]: event.target.value
    });
  
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleSelect = event => {
    this.setState({
      tag: event
    });
  }

  render() {
    return (
        <Modal bsSize="small" className="pollModal" show={this.props.open} onHide={this.props.handler}>
          <Modal.Body className="pollBody">
            <div className="createPoll">
              <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="question" bsSize="large">
                    <ControlLabel>Poll Question</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.title}
                      placeholder="Enter Question"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="option1" bsSize="large">
                    <ControlLabel>Choice 1</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.option1}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="option2" bsSize="large">
                    <ControlLabel>Choice 2</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.option2}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="option3" bsSize="large">
                    <ControlLabel>Choice 3</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.option3}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="option4" bsSize="large">
                    <ControlLabel>Choice 4</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.option4}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <Select
                    className="tagName"
                    value={this.state.tag}
                    onChange={this.handleSelect}
                    options={this.props.tags}
                  />
                  
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                    Submit Poll
                  </Button>
                </form>
              </div>
          </Modal.Body>
        </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tagReducer.tags,
    loading: state.tagReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTags: () => dispatch(actions.getTags())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);