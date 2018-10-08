import React, { Component } from 'react';
import './style.css';
import { Col, Row, Container } from 'reactstrap';

class Product extends Component {
  render() {
    return (
        <div>
            <Container>
                <Row style={styles.titleMovie}>
                    <Col xs="3" className="title-active">
                        <label style={{ fontSize: '22px', marginLeft: '-15px'}}>PHIM ĐANG CHIẾU</label>
                    </Col>
                    <Col xs="3" className="title-active">
                        <label style={{ fontSize: '22px' }}>PHIM SẮP CHIẾU</label>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" sm="4" xs="6" style={styles.itemMovie} className="item-movie">
                        <div>
                            <img alt="" src={"/images/poster/poster1.jpg"} style={{width: '100%', height: '100%'}}/>
                            <div style={{background: 'red'}}>

                            </div>
                        </div>
                        <div>
                            <label>VENOM</label>
                        </div>
                    </Col>
                    <Col md="4" sm="4" xs="6" style={styles.itemMovie} className="item-movie">
                        <div>
                            <img alt="" src={"/images/poster/poster3.jpg"} style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div>
                            <label>VENOM</label>
                        </div>
                    </Col>
                    <Col md="4" sm="4" xs="6" style={styles.itemMovie} className="item-movie">
                        <div>
                            <img alt="" src={"/images/poster/poster2.jpg"} style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div>
                            <label>VENOM</label>
                        </div>
                    </Col>
                    <Col md="4" sm="4" xs="6" style={styles.itemMovie} className="item-movie">
                        <div>
                            <img alt="" src={"/images/poster/poster1.jpg"} style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div>
                            <label>VENOM</label>
                        </div>
                    </Col>
                    <Col md="4" sm="4" xs="6" style={styles.itemMovie} className="item-movie">
                        <div>
                            <img alt="" src={"/images/poster/poster3.jpg"} style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div>
                            <label>VENOM</label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Product;

const styles = {
    itemMovie: {
        marginBottom: '20px',
    },

    titleMovie:{
        width: '100%',
        marginBottom: '20px',
        marginLeft: '0px'
    },
    
}