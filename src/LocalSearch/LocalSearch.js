import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const LocalSearch = () => {
    return (
        <Container className="pt-4 pb-5">
            <Row>
                <Col md={6}>
                    <h3 className="local-h3">Local Search Rank Checker</h3>
                    <h2>Know where you rank, and what to focus on</h2>
                    <div className="local-manu">
                        <ul>
                            <li>Monitor rankings at city or postal code level</li>
                            <li>Compare rankings for 100s of locations in one report</li>
                            <li>Benchmark rankings vs competitors</li>
                            <li>Uncover localized search volumes so you know the best keywords to target</li>
                        </ul>
                    </div>
                    <a className="green-btn" href="notCreate">Start your 14 day free trial</a>
                </Col>
                <Col md={6}>
                    <Image className="img-fluid" src="https://corp-brightlocal.imgix.net/2020/10/Header_Image-1.png" alt="local-search" width="578px" height="324px" />
                </Col>
            </Row>
        </Container>
    );
}

export default LocalSearch;