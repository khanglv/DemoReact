import React, { Component } from 'react';
import './style.css';
import { Row, Col } from 'reactstrap'

class Detail extends Component {
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

export default Detail;
