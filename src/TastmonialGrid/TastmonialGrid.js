import { Container, Row, Col, Card } from "react-bootstrap"
import style from "./TastmonialGrid.module.css"
import Image from "next/image";
import { Height } from "@material-ui/icons";

const gridInfu = [
    { id: 1, img: "/S.-Hallam-002.jpg", text: "If you want to save time and save money, then BrightLocal must be part of your local SEO toolkit.", name: "Susan Hallam MBE", info: "Managing Director, Hallam Internet" },
    { id: 2, img: "/casey-meraz-headshot-300x300-1.png", text: "Having BrightLocal on your side is like having a full - time local SEO staff.", name: "Casey Marez", info: "Founder and CEO, Juris Digital" },
    { id: 3, img: "/mike-ramsey.jpeg", text: "Easy to understand and goes deep enough to give actionable data in a fraction of the time it would take manually.", name: "Mike Ramsey", info: "President, Nifty Marketing" },
]

const TastmonialGrid = () => {
    return (
        <Container className="pt-5 pb-4">
            <h1 className="text-center pb-5">Dont just take our word for it...</h1>
            <Row>
                {
                    gridInfu.map(grid =>
                        <Col md={4} sm={12} key={grid.id}>
                            <Card style={{borderRadius:"15px", minHeight:"100%"}}>
                                <Card.Img width="100%" height="100%" variant="top" src={grid.img} style={{ borderRadiusTop: "15px"}} />
                                <Card.Body>
                                    <Card.Title>
                                        <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/quote_marks.svg" alt="svg" width="30px" height="30px"/>
                                        <span className={style.quoteImageText}>{grid.text}</span>
                                    </Card.Title>
                                </Card.Body>
                                <Card.Body>
                                    <h4>{grid.name}</h4>
                                    <Card.Text>{grid.info}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default TastmonialGrid;