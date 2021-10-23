import { Container, Row, Col } from "react-bootstrap";
import "./FooterSectaion.module.css";
import FooterTop from "../FooterSectaion/FooterTob/FooterTob"
import FooterBootom from "../FooterSectaion/FooterBootom/FooterBootom"
import Image from 'next/image';
import styles from "./FooterSectaion.module.css"

const FooterSectaion = () => {
    return ( 
        <Container fluid className="pb-4 pt-5">
            <Row>
                <Col sm={12}>
                    <FooterTop />
                </Col>
            </Row>
            <Row>
                <Col sm={12} >
                    <FooterBootom />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div className={styles.footerImg}>
                        <Image src="/brightlocal_logo.svg" alt="Picture of the author" width="181px" height="31px" />
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default FooterSectaion;