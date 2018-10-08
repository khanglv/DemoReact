import React, { Component } from 'react';
import './style.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,
        Col, Row, Container,
        Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const items = [
    {
        src: '/images/poster/poster1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: '/images/poster/poster2.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: '/images/poster/poster3.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: '/images/poster/poster4.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} style={{width: '100%', height: 'auto'}}/>
            </CarouselItem>
          );
        });
        return (
            <div>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                <div style={{border: '1px solid rgba(0, 0, 0, 0.5)', width: '280px', height: '320px', background: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: '20px', right: '12%'}}>
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
            </div>
        );
    }
}

export default Main;

