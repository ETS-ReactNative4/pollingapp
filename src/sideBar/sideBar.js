import React, { Component } from 'react';
import './sideBar.css';
import { Modal, Button } from 'react-bootstrap';

class sideBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Modal show={this.props.open} onHide={this.props.handler}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Filter Results</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <ul>
                        <li>Sports</li>
                        <li>Gaming</li>
                        <li>Changing this</li>
                        <li>Television</li>
                        <li>Movies</li>
                        <li>Music</li>
                        <li>Nature</li>
                    </ul>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
  }
}

export default sideBar;