import React, { Component } from 'react';
import './style.css';
import Header from '../Header/Header';
import { Row, Col, Container } from 'reactstrap'

const HostDomainPoster = 'http://image.tmdb.org/t/p/original';
const HostDomainItem = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemData: {},
            lstGenres: []
        }
    }

    componentDidMount(){
        this.loadData_1();
        this.loadData_2();  
    }

    loadData_1(){
        fetch('https://api.themoviedb.org/3/movie/335983?api_key=b2d687610125a0a8771748c88621525c&language&language=en-US')
            .then( res => res.json())
            .then(json => {
                this.setState({
                    itemData: json,
                    lstGenres: json.genres
                })
            });   
    }

    loadData_2(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2d687610125a0a8771748c88621525c&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1')
            .then( res => res.json())
            .then(json => {
                // this.setState({
                //     itemData: json,
                //     lstGenres: json.genres
                // })
            });   
    }

    render() {
        const { itemData, lstGenres } = this.state;
        if(itemData.poster_path !== null && itemData.poster_path !== undefined){
            var path = HostDomainItem + itemData.poster_path;
            var pathPoster = HostDomainPoster + itemData.backdrop_path;
        }
        var str = '';
        const tmpGenres = lstGenres.map((item, index)=>{
            if(index === 0){
                str = item.name;
            }
            str = str + ', ' + item.name;
        });
        
        return (
            <div>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                    <Header />
                    </Col>
                </Row>
                <div style={{backgroundImage: 'url(' + pathPoster + ')', height: '100%', backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover'}}>
                    <div style={styles.backgroundHeader}>
                        <Container style={{padding: '50px 0'}}>
                        <Row>
                        <Col xs='3'>
                                <img alt="detail-image" src={path} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                            </Col>
                            <Col xs='9'>
                                <label style={{fontSize: '24px', fontWeight: 'bold'}}>{itemData.title}</label><br/><br/>
                                <label style={{fontWeight: 'bold'}}>Description</label><br/>
                                <label>{itemData.overview}</label><br/>
                                <label style={{fontWeight: 'bold'}}>Premiere</label>&nbsp;<span>{itemData.release_date}</span>&nbsp;&nbsp; <i className="far fa-clock"></i>&nbsp;<label style={{fontWeight: 'bold'}}>{itemData.runtime}</label><br/>
                                <label style={{fontWeight: 'bold'}}>Genres</label>:&nbsp; <span>{str}</span><br/>
                                {/* <label style={{fontWeight: 'bold'}}>Country</label>:&nbsp; <span>{itemData.production_countries.name}</span><br/> */}
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;

const styles = {
    backgroundHeader: {
        width: '100%',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(223, 230, 230, 0.92) 0%, rgba(254, 255, 255, 0.89) 100%)', 
        maxHeight: '560px',                                                                                                                                                                                                                                                                                                                                                           
    },
}