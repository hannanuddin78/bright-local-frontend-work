import { ListGroup } from "react-bootstrap"

const CompanyList = () => {
    return ( 
        <div>
            <h3 style={{ borderBottom: "2px solid black", paddingBottom:"25px" }}>Company</h3>
            <ListGroup className="list-item-group">
                <ListGroup.Item className="mt-3">About Us</ListGroup.Item>
                <ListGroup.Item>Our Commitments</ListGroup.Item>
                <ListGroup.Item>Contact Us</ListGroup.Item>
                <ListGroup.Item>Case Studies</ListGroup.Item>
                <ListGroup.Item>Customers</ListGroup.Item>
                <ListGroup.Item>Affiliate Program</ListGroup.Item>
                <ListGroup.Item>Terms & Conditions</ListGroup.Item>
                <ListGroup.Item>Privacy Policy</ListGroup.Item>
                <ListGroup.Item>Cookie Policy</ListGroup.Item>
            </ListGroup>
        </div>
     );
}





 
export default CompanyList;