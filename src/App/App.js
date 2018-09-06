import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import HeaderNav from '../headerNav/headerNav';
import PostSection from '../postSection/postSection';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <HeaderNav />
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={6} md={2}>
          </Col>
          <Col xs={6} md={10}>
            <PostSection />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default App;