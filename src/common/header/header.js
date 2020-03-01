import React from 'react';
import Logo from './../../assets/images/site-logo.png'
import $ from 'jquery';
import { Container, Navbar, Nav} from 'react-bootstrap';


export class Header extends React.Component {
    headerFix(){
        var getBannerHeight = $('.banner').height();
        //console.log(getBannerHeight);
        if(window.pageYOffset > getBannerHeight){
            $('.nabbar-trans').addClass('headerFixed');
        }else{
            $('.nabbar-trans').removeClass('headerFixed');
        }
    }

    render(){
        return(
            <header>
                <Navbar bg="trans" variant="trans" expand="lg" fixed="top" onScroll={this.headerFix}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav 
                            activeKey="/home">
                                <Nav.Item as="li">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#about">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#service">Service</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#Work">work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#blog">Blog</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}