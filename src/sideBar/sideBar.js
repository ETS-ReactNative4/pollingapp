import React, { Component } from 'react';
import './sideBar.css';
import PostSection from '../postSection/postSection.js';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class sideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
        //tags: []
    }

    //this.loadTags = this.loadTags.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

  }

 // componentDidMount(){
 //   this.loadTags()
 // }

 // handleChange(e){
 //   console.log(e.target.value)
 //   let tagsCopy = JSON.parse(JSON.stringify(this.state.tags))
 //   tagsCopy[e.target.value].checked = !tagsCopy[e.target.value].checked
 //  this.setState({
 //       tags: tagsCopy
 //   });
 //   console.log(this.state.tags);
 // }

  //handleSubmit(e){
  //    let propTags = this.state.tags.filter(tag => tag.checked === true);
  //    <PostSection tags={propTags} />
  //}

 /* loadTags(){
    const url = 'http://localhost:8000/api/tag/';
    fetch(url)
      .then(res => res.json())
      .then(json => {
          var arr = json;
          //Adds a "checked" variable to each tag object. Used for checkbox filtering
          var newArr = arr.map((obj) => {
            obj.checked = false;
            return obj;
          })
          this.setState({
              tags: newArr
          })
          console.log(this.state.tags);
      }); 
  }
`*/
  render() {
    return (
        <Modal show={this.props.open} onHide={this.props.handler}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Filter Results</Modal.Title>
                </Modal.Header>
                
                <Modal.Body className="sidebar">
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    );
  }
}

export default sideBar;