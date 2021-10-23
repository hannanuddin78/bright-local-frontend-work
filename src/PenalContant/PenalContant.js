import Image from "next/image"
import { Container, Row, Col} from "react-bootstrap"
import style from "./penalSectaion.module.css"

const penalItems = [
    {id: 1, penalImg: "/g2-medal.png", starIcon: "/Stars_4.5-1.png", review:"4.5 stars"},
    { id: 2, penalImg: "/croz-medal.png", starIcon: "/Stars_4.7-1.png", review: "4.8 stars" },
    { id: 3, penalImg: "/trustpilot-new.png", starIcon: "/Stars_4.8-1.png", review: "4.8 stars" },
    { id: 4, penalImg: "/capterra.png", starIcon: "/Stars_4.5-1.png", review: "4.8 stars" }
]

const PenalContant = () => {
    return ( 
        <Container fluid className="mt-5">
            <Row>
                {
                    penalItems.map(penal => 
                        <Col md={3} key={penal.id}>
                            <div className={style.penalSectaion}>
                                <Image src={penal.penalImg} alt="penal-img" width="240px" height="120px"/>
                                <br/>
                                <Image src={penal.starIcon} alt="penal-img" width="180px" height="30px" />
                                <p><strong>{penal.review}</strong> out of 5</p>
                            </div>
                        </Col>
                    )
                }
            </Row> 
        </Container>
     );
}
 
export default PenalContant;