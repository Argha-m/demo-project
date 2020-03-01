import React from 'react';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';
import personImg from '../../assets/images/testimonial-2.jpg';

export class About extends React.Component{
    render(){
        return(
            <section className="aboutSection section-pt section-pb">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="shadow-area">
                                <Row>
                                    <Col sm="6">
                                        <Row>
                                            <Col sm={6} md={5}>
                                                <div className="about-img"><img src={personImg} alt="" /></div>
                                            </Col>
                                            <Col sm={6} md={7}>
                                                <div class="about-info">
                                                    <p><strong>Name</strong> Argha Mallick</p>
                                                    <p><strong>Profile</strong> Front-end developer</p>
                                                    <p><strong>Email</strong> Contact@example.com</p>
                                                    <p><strong>Phone</strong> 9876543210</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="skill-level">
                                            <p><strong>Skill</strong></p>
                                            <div className="skill-list">
                                                <span className="skill-name">Html</span>
                                                <span className="float-right">90%</span>
                                                <ProgressBar now="90"></ProgressBar>
                                            </div>
                                            <div className="skill-list">
                                                <span className="skill-name">Css</span>
                                                <span className="float-right">85%</span>
                                                <ProgressBar now="90"></ProgressBar>
                                            </div>
                                            <div className="skill-list">
                                                <span className="skill-name">Wrodpress</span>
                                                <span className="float-right">70%</span>
                                                <ProgressBar now="70"></ProgressBar>
                                            </div>
                                            <div className="skill-list">
                                                <span className="skill-name">Java Script</span>
                                                <span className="float-right">50%</span>
                                                <ProgressBar now="50"></ProgressBar>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="6">
                                        <div className="about-me">
                                            <h4>About Me</h4>
                                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>

                                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</p>
                                            
                                            <p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}