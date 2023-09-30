import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../../assets/images/about.jpg";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col md={5}>
            <img src={aboutImage} width="100%" />
          </Col>
          <Col md={7}>
            <h2 className="section-heading text-start">
              First Choice For Online Education Anywhere
            </h2>
            <p
              className="text-start mb-5"
              style={{ lineHeight: "28px", fontFamily: "robotoregular" }}
            >
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor consetetur takimata eirmod, dolores takimata consetetur
              invidunt magna dolores aliquyam dolores dolore. Amet erat amet et
              magna
            </p>
            <Row>
              <Col md="3" className="bg-success text-white p-3">
                <h3>123</h3>
                <h6>AVAILABLE SUBJECTS</h6>
              </Col>
              <Col md="3" className="bg-primary text-white p-3">
                <h3>123</h3>
                <h6>
                  ONLINE
                  <br /> COURSES
                </h6>
              </Col>
              <Col md="3" className="bg-danger text-white p-3">
                <h3>123</h3>
                <h6>
                  SKILLED
                  <br /> students
                </h6>
              </Col>
              <Col md="3" className="bg-warning text-white p-3">
                <h3>123</h3>
                <h6>
                  HAPPY <br />
                  STUDENTS
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
