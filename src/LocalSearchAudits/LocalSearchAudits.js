import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const LocalSearchAudits = () => {
    return (
        <Container className="pt-4 pb-5">
            <Row>
                <Col md={6}>
                    <h3 className="local-h3">Spot optimization opportunities instantly</h3>
                    <div className="local-manu">
                        <ul>
                            <li>Analyze 300 + data points in minutes – without lifting a finger</li>
                            <li>Quickly identify areas for improvement</li>
                            <li>Get benchmarks against your top - ranking competitors</li>
                            <li>Win more pitches and impress existing clients with white - label audits</li>
                        </ul>
                    </div>
                    <a className="green-btn" href="notCreate">Start your 14 day free trial</a>
                </Col>
                <Col md={6}>
                    <Image className="img-fluid" src="https://corp-brightlocal.imgix.net/2020/10/LSA_Image_3_Updated.png" alt="local-search" width="578px" height="301px" />
                </Col>
            </Row>
        </Container>
    );
}

export default LocalSearchAudits;