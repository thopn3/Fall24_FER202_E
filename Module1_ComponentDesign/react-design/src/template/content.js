import { Component } from "react";
import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import "../App.css";

class Content extends Component {
    render() {
        
        return (
            <Row>
                <Col className="d-none d-sm-block" sm={2} md={2} style={{ border: "1px solid green" }}>Left</Col>
                <Col>
                    <Container fluid>
                        <Row>
                            <Col xs={6}>
                                <h3 className="mb-3">Best Sale</h3>
                            </Col>
                            <Col xs={6} style={{textAlign:"right"}}>
                                <a className="btn btn-default mb-3 mr-1" href="#carouselExampleIndicators2" role="button"
                                    data-slide="prev">
                                    <i className="fa fa-arrow-left"></i>
                                </a>
                                <a className="btn btn-default mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <i className="fa fa-arrow-right"></i>
                                </a>
                            </Col>
                            <Col xs={12}>
                                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    Special title treatment</h4>
                                                                <p className="card-text">With supporting text
                                                                    below as a natural lead-in</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title
                                                                    treatment</h4>
                                                                <p className="card-text">With supporting
                                                                    text below as a natural
                                                                    lead-in to additional
                                                                    content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122182422/images1.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011815/sutterlin-1362879_640-(1).jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <h3 className="mb-3">New Products</h3>
                            </Col>
                            <Col xs={6} style={{textAlign:"right"}}>
                                <a className="btn btn-default mb-3 mr-1" href="#carouselExampleIndicators2" role="button"
                                    data-slide="prev">
                                    <i className="fa fa-arrow-left"></i>
                                </a>
                                <a className="btn btn-default mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <i className="fa fa-arrow-right"></i>
                                </a>
                            </Col>
                            <Col xs={12}>
                                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    Special title treatment</h4>
                                                                <p className="card-text">With supporting text
                                                                    below as a natural lead-in</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title
                                                                    treatment</h4>
                                                                <p className="card-text">With supporting
                                                                    text below as a natural
                                                                    lead-in to additional
                                                                    content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                    
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122182422/images1.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011815/sutterlin-1362879_640-(1).jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>

                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280"
                                                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg"/>
                                                            <div className="card-body">
                                                                <h4 className="card-title">Special title treatment</h4>
                                                                <p className="card-text">With supporting text below
                                                                    as a natural lead-in to
                                                                    additional content.</p>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="d-none d-sm-none d-md-block" md={2} style={{ border: "1px solid green" }}>Right</Col>
            </Row>
        );
    }
}

export default Content;