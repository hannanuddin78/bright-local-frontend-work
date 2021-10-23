import { ListGroup, Row, Col} from "react-bootstrap"

const ProductsList = () => {
    return (
        <>
            <h3 style={{ borderBottom: "2px solid black", paddingBottom: "25px" }}>Products</h3>

           <Row>
                <Col md={6}> <ListGroup className="list-item-group">
                    <h6 style={{ fontWeight: "900", fontSize: "medium", marginTop: "10px"}}>Platform</h6>
                    <ListGroup.Item> - Local Search Grid</ListGroup.Item>
                    <ListGroup.Item> - Local Search Rank Checker</ListGroup.Item>
                    <ListGroup.Item> - Citation Tracker</ListGroup.Item>
                    <ListGroup.Item> - Local Search Audit</ListGroup.Item>
                    <ListGroup.Item> - Google My Business Audit</ListGroup.Item>
                    <ListGroup.Item>Reputation Manager</ListGroup.Item>
                    <ListGroup.Item> - Monitor Reviews</ListGroup.Item>
                    <ListGroup.Item> - Get Reviews</ListGroup.Item>
                    <ListGroup.Item> - Showcase Reviews</ListGroup.Item>
                    <ListGroup.Item>Citation Builder</ListGroup.Item>
                    <ListGroup.Item>Data Aggregator Submissions</ListGroup.Item>
                    <ListGroup.Item>Yext Replacement Service</ListGroup.Item>
                    <ListGroup.Item>Plans and Pricing</ListGroup.Item>
                    <ListGroup.Item>Explore Our Demo Dashboard</ListGroup.Item>
                </ListGroup></Col>
                <Col md={6}> <ListGroup className="list-item-group">
                    <h6 style={{ fontWeight: "900", fontSize: "medium", marginTop: "10px" }}>Solutions</h6>
                    <ListGroup.Item>Agency</ListGroup.Item>
                    <ListGroup.Item>White - Label Tools and Reporting</ListGroup.Item>
                    <ListGroup.Item> - Multi - location Business</ListGroup.Item>
                    <ListGroup.Item> - Small Business</ListGroup.Item>
                    <ListGroup.Item>BrightLocal for Enterprise</ListGroup.Item>
                    <ListGroup.Item>Local SEO APIs</ListGroup.Item>
                    <ListGroup.Item>Free Tools</ListGroup.Item>
                    <ListGroup.Item>Local Listings Health Scanner</ListGroup.Item>
                    <ListGroup.Item>Local RankFlux: Local Algorithm Monitoring</ListGroup.Item>
                    <ListGroup.Item>Google Review Link Generator</ListGroup.Item>
                </ListGroup></Col>
           </Row>
        </>
    );
}

export default ProductsList;