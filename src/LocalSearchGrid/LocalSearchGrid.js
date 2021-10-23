import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const LocalSearchGrid = () => {
    return (
        <Container className="pt-4 pb-5">
            <Row>
                <Col md={6}>
                    <Image className="img-fluid" src="https://corp-brightlocal.imgix.net/2021/02/lsg-graphic-dots-2x.png" alt="local-search" width="578px" height="387px" />
                </Col>
                <Col md={6}>
                    <h3 className="local-h3">Local Search Grid</h3>
                    <h2>Put your rankings on the map</h2>
                    <div className="local-manu">
                        <ul>
                            <li>See how much local search visibility you’re really claiming</li>
                            <li>Spot opportunities to outrank competitors</li>
                            <li>Track progress over time and react fast to any drops with a single ‘Average Map Rank’ metric</li>
                            <li>Identify spam in Google My Business profiles</li>
                        </ul>
                    </div>
                    <a className="green-btn" href="notCreate">Start your 14 day free trial</a>
                </Col>
            </Row>
        </Container>
    );
}

export default LocalSearchGrid;