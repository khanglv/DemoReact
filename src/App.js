import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Main from './components/Main/Main';
import {Container, Row, Col } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Col>
          <Header/>
          <Row>
            <Col xs="12" sm="12" lg="12">
              <Main />
            </Col>
            <Col xs="6" sm="6" lg="6">
              <Product />
            </Col>
          </Row>
          
      </Col>
    );
  }
}

export default App;
