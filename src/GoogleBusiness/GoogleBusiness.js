import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const GoogleBusiness = () => {
    return (
        <Container className="pt-4 pb-5">
            <Row>
                <Col md={6}>
                    <Image className="img-fluid" src="https://corp-brightlocal.imgix.net/2020/10/GMB_Image_3.png" alt="local-search" width="578px" height="317px" />
                </Col>
                <Col md={6}>
                    <h3 className="local-h3">Google My Business Audit</h3>
                    <h2>Uncover the GMB insights to leapfrog the competition</h2>
                    <div className="local-manu">
                        <ul>
                            <li>Discover the GMB categories used by top - ranking competitors</li>
                            <li>See how you stack up vs.the competition against the most important local ranking factors that affect local rankings</li>
                            <li>Identify duplicate listings with ease</li>
                            <li>Make more informed decisions with 3x more data than what GMB Insights provides</li>
                        </ul>
                    </div>
                    <a className="green-btn" href="notCreate">Start your 14 day free trial</a>
                </Col>
            </Row>
        </Container>
    );
}

export default GoogleBusiness;