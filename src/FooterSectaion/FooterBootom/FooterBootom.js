import { Container, Nav } from 'react-bootstrap';
import Image from "next/image"
import style from "./FooterBootom.module.css"

const iconItems = [
    { id: 1, ic: "/icons8-twitter-circled-100.png" },
    { id: 2, ic: "/icons8-facebook-48.png" },
    { id: 3, ic: "/icons8-linkedin-48.png" },
    { id: 4, ic: "/icons8-large-icons-100.png" },
    { id: 5, ic: "/icons8-youtube-play-button-64.png" }
]
const FooterBootom = () => {
    return (
        <>
            <Nav.Item className="navLinkIcon">
                {iconItems.map(icons =>
                    <Nav.Link className={style.rootFtBt} eventKey="link-2" key={icons.id}>
                        <Image className={style.footerIcon} src={icons.ic} alt="icon" width="40px" height="40px" />
                </Nav.Link>
                )}
            </Nav.Item>
        </>
    );
}

export default FooterBootom;