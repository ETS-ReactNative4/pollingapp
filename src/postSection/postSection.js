import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import './postSection.css';


class postSection extends Component {
  render() {
    return (
        <div>
            <Well bsSize="large">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col md={2}>
                            Total votes:
                                100
                        </Col>
                        <Col md={5}>
                            Do you think Incredibles 2 is a good movie?
                        </Col>
                        <Col md={3}>
                            Comments (350)
                        </Col>
                        <Col md={2}>
                            #Movies
                        </Col>
                    </Row>
                </Grid>
            </Well>
            <Well bsSize="large">Look I'm in a large well!</Well>
            <Well bsSize="large">Look I'm in a large well!</Well>
            <Well bsSize="large">Look I'm in a large well!</Well>
            <Well bsSize="large">Look I'm in a large well!</Well>
            <Well bsSize="large">Look I'm in a large well!</Well>
        </div>
    );
  }
}

export default postSection;