import React, { Component } from 'react';
import './style.css';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Container, Row, Col } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <div>
                <div style={styles.header}>
                    <img alt="" src={"/images/logos/logo.png"} style={{ height: '115px', position: 'absolute', marginLeft: '25px' }} />
                    <Container>
                        <Row style={{display: 'block'}}>
                            <Col xs="3" style={{ marginTop: '32px', float: 'right' }}>
                                <div className="inner-addon right-addon">
                                    <i className="fas fa-search"></i>
                                    <input type="text" className="form-control search-header" placeholder="Search film" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Navbar light  expand="md">
                    <NavbarBrand>Rank Of Film</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Film
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        New Film
                                    </DropdownItem>
                                    <DropdownItem>
                                        Coming soon
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink>Event</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Ticket</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Sale</NavLink>
                            </NavItem>
                        </Nav>
                        <div className="ml-auto" style={{float: 'right', color: '#fff', padding: '15px 0'}}>
                            <i className="far fa-user"> <span style={{fontFamily: 'sans-serif'}}>&nbsp;Đăng nhập</span></i>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;

const styles = {
    customNavbar: {
        borderRadius: '0px',
        background: 'black',
    },
    header: {
        height: '100px',
        width: '100%',
        background: 'rgba(118, 90, 60, 0.13)',
    }
}

