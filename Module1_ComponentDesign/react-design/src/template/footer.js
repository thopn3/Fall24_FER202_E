import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} md={4}>Footer Left</Col>
                <Col md={8} style={{padding:"0px"}}>
                    <Container fluid>
                        <Row>
                            <Col xs={6} sm={3} style={{height:"200px"}}>Col-1</Col>
                            <Col xs={6} sm={3}>Col-2</Col>
                            <Col xs={6} sm={3}>Col-3</Col>
                            <Col xs={6} sm={3}>Col-4</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        );
    }
}

export default Footer;