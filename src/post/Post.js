import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';
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
                            Total votes: {this.props.upvotes}
                        </Col>
                        <Col md={5}>
                            {this.props.title}
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