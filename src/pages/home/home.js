import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export class Home extends React.Component{
    render(){
        return(
            <section className="home-banner-top">
                <Container>
                    <Row className="banner-content display-table">
                        <Col sm={12}>
                            <h1 className="banenr-title mb-4">I am Argha Mallick</h1>
                            <div className="banner-subtitle">
                                <p>Web Designer</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}