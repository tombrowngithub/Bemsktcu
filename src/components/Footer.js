import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
            <Container className="tw-bg-[#212327] text-white">
                <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center" xl={4} lg={4} md={6} sm={12}>
                        <h3>Menu</h3>
                        <div className="d-flex flex-column">
                            <ul>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="d-flex flex-column align-items-center justify-content-center" xl={4} lg={4} md={6} sm={12}>
                        <h3>Menu</h3>
                        <div className="d-flex flex-column">
                            <ul>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="d-flex flex-column align-items-center justify-content-center" xl={4} lg={4} md={6} sm={12}>
                        <h3>Menu</h3>
                        <div className="d-flex flex-column">
                            <ul>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                                <li>This what we offer</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}

export default Footer;