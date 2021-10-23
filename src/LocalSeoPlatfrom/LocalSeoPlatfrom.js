import Image from "next/image";
import { Container } from "react-bootstrap";
import style from "./LocalSeoPlatfrom.module.css";

const LocalSeoPlatfrom = () => {
    return (
        <Container className="text-center mb-5 mt-5">
            <div className={style.svgSectaion}>
                <Image src="https://brightlocal-corp-assets.s3.amazonaws.com/2019/04/Local-SEO-Tools.svg" alt="svg-icon" width="100%" height="100%" />
                <h1>Local SEO Tools</h1>
            </div>
            <h1 style={{ fontSize: "3rem", paddingBottom: "20px" }}>An all-in-one platform to monitor, audit, and <br /> improve local SEO</h1>
            <h5 className="pb-4">Save time and make smarter decisions with BrightLocal.</h5>
            <a className="green-btn" href="notCreate">Try For Free</a>

            <div>
                <Image className="seo-img img-fluid" src="https://corp-brightlocal.imgix.net/2019/04/SEO-Tools-BrightLocal.png" alt="img" width="1024px" height="667px" />
            </div>
        </Container>
    );
}

export default LocalSeoPlatfrom;