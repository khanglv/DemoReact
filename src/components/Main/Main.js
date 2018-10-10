import React, { Component } from 'react';
import './style.css';
import Header from '../Header/Header';
import Product from '../Product/Product';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,
        Col, Row, Container,
        Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0,
            lstSlideShow: [],
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=b2d687610125a0a8771748c88621525c&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1')
            .then( res => res.json())
            .then(json => {
                var lstTmp = json;
                if(json.results.length > 4){
                    lstTmp = json.results.slice(0, 4);
                }
                this.setState({
                    lstSlideShow: lstTmp
                })
            });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.lstSlideShow.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.lstSlideShow.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex, lstSlideShow } = this.state;

        const slides = lstSlideShow.map((item) => {
            var path = 'http://image.tmdb.org/t/p/original' + item.backdrop_path;
            return (
                <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.poster_path}
                >
                <img src={path} alt={item.poster_path} style={{width: '100%', height: 'auto', maxHeight: '682px'}}/>
                <CarouselCaption captionText={item.title} captionHeader={item.original_title} />
                </CarouselItem>
            );
        });
        return (
            <div>
                <Header/>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                <div style={{border: '1px solid rgba(0, 0, 0, 0.5)', width: '280px', height: '320px', background: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: '210px', right: '12%'}}>
                    <Col xs="6" className="text-center" style={{ padding: '5px 0px', background: '#00b8ff', color: '#fff' }}>
                        MUA VÉ NHANH
                    </Col>
                    <Container>
                        <Row style={{borderBottom: '1px solid'}}>
                            <Col className="p-0 book-ticket text-center" style={{borderBottom: '1px solid #fff'}}>
                                <label style={{color: '#fff'}}>Theo phim</label>
                            </Col>
                            <Col className="p-0 book-ticket text-center">
                                <label>Theo ngày</label>
                            </Col>
                            <Col className="p-0 book-ticket text-center">
                                <label>Theo rạp</label>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Col style={{ marginTop: '30px' }} xs="12" sm="12" lg="12">
                    <Product />
                </Col>
            </div>
        );
    }
}

export default Main;

