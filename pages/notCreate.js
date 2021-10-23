import Link from 'next/link';
import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";

const notCreate = () => {
    return (
        <Container>
            <Row className=" align-content-center" style={{ height: "100vh" }}>
                <Col sm={12}>
                    <Card className="text-center mx-auto" border="danger" style={{ width: '50%' }}>
                        <Card.Header style={{fontSize:"20px", fontWeight:"700"}}>
                            <Link href="/">
                                Go To Home Page...
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <h1 style={{ fontWeight: "700" }}>Not Create This Page</h1>
                            <h5 className="mt-4">
                                it is just test frond-end work
                            </h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default notCreate
