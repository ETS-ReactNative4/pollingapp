import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, MenuItem } from 'react-bootstrap';


class tagList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <MenuItem eventKey={this.props.index} onSelect={this.props.handleChange}>
            {this.props.tagName}
        </MenuItem>
    );
  }
}

export default tagList;