import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Post.css';


class Post extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
            <Well bsSize="large">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col md={2}>
                            Total votes: 700
                        </Col>
                        <Col md={5}>
                            <Link to={"/poll/" + this.props.id}>{this.props.title}</Link> 
                        </Col>
                        <Col md={3}>
                            {this.props.profile}
                        </Col>
                        <Col md={2}>
                            {this.props.tags}
                        </Col>
                    </Row>
                </Grid>
            </Well>
        </div>
    );
  }
}

export default Post;