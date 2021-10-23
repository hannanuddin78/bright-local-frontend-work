import { Row, Col } from "react-bootstrap";
import ProductsList from "../FooterTob/ProductsList/ProductsList";
import CompanyList from "../FooterTob/CompanyList/CompanyList";
import CommunityList from "../FooterTob/CommunityList/CommunityList"
import { Container } from "react-bootstrap";

const FooterTob = () => {
    return (
        <Container>
            <Row className="pb-4">
                <Col md={6}>
                    <ProductsList />
                </Col>
                <Col md={3}>
                    <CompanyList />
                </Col>
                <Col md={3}>
                    <CommunityList />
                </Col>
            </Row>
        </Container>
    );
}

export default FooterTob;