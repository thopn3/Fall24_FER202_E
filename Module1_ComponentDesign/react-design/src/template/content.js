import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Content extends Component {
    render() {
        return (
            <Row>
                <Col className="d-none d-sm-block" sm={2} md={2} style={{ border: "1px solid green" }}>Left</Col>
                <Col sm={10} md={8} style={{ border: "1px solid green" }}>Main</Col>
                <Col className="d-none d-sm-none d-md-block" md={2} style={{ border: "1px solid green" }}>Right</Col>
            </Row>
        );
    }
}

export default Content;