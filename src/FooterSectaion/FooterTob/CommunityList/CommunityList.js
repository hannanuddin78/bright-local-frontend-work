import { ListGroup } from "react-bootstrap"

const CommunityList = () => {
    return ( 
        <div>
            <h3 style={{ borderBottom: "2px solid black", paddingBottom: "25px"}}>CommunityList</h3>
            <ListGroup className="list-item-group">
                <h6 style={{ fontWeight: "900", fontSize: "medium", marginTop: "10px" }}>Resources</h6>
                <ListGroup.Item>BrightLocal Agency DirectoryNEW</ListGroup.Item>
                <ListGroup.Item>BrightLocal Academy NEW</ListGroup.Item>
                <ListGroup.Item>Book a Demo</ListGroup.Item>
                <ListGroup.Item>Free Resources</ListGroup.Item>
                <ListGroup.Item>Learn Local Marketing</ListGroup.Item>
                <ListGroup.Item>Webinars</ListGroup.Item>
                <ListGroup.Item>The BrightLocal Podcast</ListGroup.Item>
                <ListGroup.Item style={{ fontWeight: "900", fontSize: "medium", marginTop: "10px" }}>Customers</ListGroup.Item>
                <ListGroup.Item>Login</ListGroup.Item>
                <ListGroup.Item>Help Center</ListGroup.Item>
                <ListGroup.Item>Service Status</ListGroup.Item>
            </ListGroup>
        </div>
     );
}

export default CommunityList;