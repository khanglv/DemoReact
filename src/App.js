import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Main from './components/Main/Main';
import { Row, Col } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Row>
            <Col xs="12" sm="12" lg="12">
              <Main />
            </Col>
            <Col style={{marginTop: '30px'}} xs="12" sm="12" lg="12">
              <Product />
            </Col>
          </Row>
          
      </div>
    );
  }
}

export default App;
