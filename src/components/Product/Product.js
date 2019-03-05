import React, { Component } from 'react';
import './style.css';
import { Col, Row, Container } from 'reactstrap';
import { withRouter } from 'react-router'

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            lstData: [],
        };
        // this.detail_film = this.detail_film.bind(this);
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2d687610125a0a8771748c88621525c&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1')
            .then( res => res.json())
            .then(json => {
                this.setState({
                    lstData: json.results
                })
            });
    }

    detail_film = (id)=>{
        let path = `/detail`;
        this.context.history.push(path);
    }

    render() {
        const { lstData } = this.state;
        const lstDataFilm = lstData.map((item) => {
            var path = 'http://image.tmdb.org/t/p/w300' + item.poster_path;
            return (

                <Col key={item.poster_path} md="3" sm="3" xs="4" style={styles.itemMovie} onClick={() => this.detail_film(item.id)}>
                    <div className="item-movie">
                        <img alt="" src={path} style={{ width: '100%', height: '100%' }} className="image-item-movie"/>
                        <a className="overlay">
                            <div className="text">Ticket</div>
                        </a>
                    </div>
                    <div>
                        <label>{item.title}</label>
                    </div>
                </Col>
            );
        });
        return (
            <div>
                <Container style={{maxWidth: '1370px'}}>
                    <Row style={styles.titleMovie}>
                        <Col xs="3" className="title-active">
                            <label href="a" style={{ fontSize: '22px', marginLeft: '-15px' }}>PHIM ĐANG CHIẾU</label>
                        </Col>
                        <Col xs="3" className="title-active">
                            <label style={{ fontSize: '22px' }}>PHIM SẮP CHIẾU</label>
                        </Col>
                    </Row>
                    <Row>
                        {lstDataFilm}
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