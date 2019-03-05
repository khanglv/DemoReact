import React, { Component } from 'react';
import './App.css';
import RouterURL from './components/RouterURL/RouterURL';
import { Row, Col } from 'reactstrap'

class App extends Component {
  render() {
    return (
        <div>
            <div>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <RouterURL></RouterURL>
                    </Col>
                </Row>
            </div>

        </div>
    );
  }
}

export default App;
