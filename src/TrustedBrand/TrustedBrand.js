import { Col, Container, Row } from "react-bootstrap"
//import img1 from "/hilton-1.webp"

const brandImg = [
    { id: 1, link: "https://corp-brightlocal.imgix.net/2020/02/hilton-1.png?auto=compress%2Cformat&fit=scale&h=120&ixlib=php-3.3.0&q=70&w=209&wpsize=logo-gallery" },
    { id: 2, link: "https://corp-brightlocal.imgix.net/2020/02/ikea.png?auto=compress%2Cformat&fit=scale&h=120&ixlib=php-3.3.0&q=70&w=209&wpsize=logo-gallery" },
    { id: 3, link: "https://corp-brightlocal.imgix.net/2020/02/nandos.png?auto=compress%2Cformat&fit=scale&h=120&ixlib=php-3.3.0&q=70&w=209&wpsize=logo-gallery" }, { id: 4, link: "https://corp-brightlocal.imgix.net/2020/02/valvoline-1.png?auto=compress%2Cformat&fit=scale&h=120&ixlib=php-3.3.0&q=70&w=209&wpsize=logo-gallery" }, { id: 5, link: "https://corp-brightlocal.imgix.net/2020/02/roto-rooter.png?auto=compress%2Cformat&fit=scale&h=120&ixlib=php-3.3.0&q=70&w=209&wpsize=logo-gallery" }, { id: 6, link: "https://corp-brightlocal.imgix.net/2020/02/iprospect.png?auto=compress%2Cformat&fit=scale&h=120&ixlib=php-3.3.0&q=70&w=209&wpsize=logo-gallery" }
]

const TrustedBrand = () => {
    return (
        <div className="mt-3 pb-5">
            <h2 className="text-center mb-3">Trusted by top brands, local businesses, and agencies alike</h2>
            <Container fluid>
                <Row>
                    {brandImg.map(brand =>
                        <Col md={2} key={brand.id}>
                            <img src={brand.link} alt="brand-img" />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default TrustedBrand;