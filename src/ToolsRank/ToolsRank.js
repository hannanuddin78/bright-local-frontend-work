import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap';
import style from "./ToolsRank.module.css";

const brandImg = [
    { id: 1, link: "/aduit.png" },
    { id: 2, link: "/connect.png" },
    { id: 3, link: "/label.jpg.png" },
    { id: 4, link: "/location.png" },
    { id: 5, link: "/monitor.png" },
    { id: 6, link: "/tool.png" },
    { id: 7, link: "/view.png" },
    { id: 8, link: "/gmb.png" }
]

const ToolsRank = () => {
    return (
        <div className={style.toolRank}>
            <h1 style={{ textAlign: "center" }}>Tools that help you rank higher and grow your local search visibility</h1>
            <div>
                <Container fluid>
                    <Row>
                        <Col md={8} style={{ overflow: "hidden", textAlign: "center" }}>
                            <Row>
                                {
                                    brandImg.map(item =>
                                        <Col md={3} key={item.id}>
                                            <img src={item.link} alt={item.link} />
                                        </Col>
                                    )
                                }
                            </Row>
                            <Row>
                                <Col style={{ textAlign: "right", marginTop: "80px" }}>
                                    <a className="green-btn" href="notCreate">Start your trial <br /> No Card Needed</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className={style.rankRightRight}>`BrightLocal's tools are a must-have for marketers looking to optimize their organic search results.`</Card.Title>
                                        <div className={style.brandRightMain}>
                                            <Image src="/nielson-hall-iprospect.webp" alt="img" width="100%" height="100%" />
                                            <h5>Nielson Hall</h5>
                                            <p>Head of SEO <br /> iProspect</p>
                                        </div>
                                        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                                            <StarIcon style={{ color: "#a5c559" }} />
                                            <StarIcon style={{ color: "#a5c559" }} />
                                            <StarIcon style={{ color: "#a5c559" }} />
                                            <StarIcon style={{ color: "#a5c559" }} />
                                            <StarIcon style={{ color: "#a5c559" }} />
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                            <FavoriteIcon style={{ color: "#a5c559" }} /> <span>9.5 out of 10 on Trustpilot</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ToolsRank;