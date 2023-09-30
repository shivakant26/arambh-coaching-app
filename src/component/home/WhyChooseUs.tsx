import { Col, Container, Row } from "react-bootstrap";
import { FaBookReader, FaCertificate, FaGraduationCap } from "react-icons/fa";
import WhyusImage from "../../assets/images/why-us.jpg";

const WhyChooseUs : React.FC = () => {
  return (
    <div className="why-choose-us">
      <Container>
        <Row>
          <Col md={7} className="why-choose-content">
            <h2 className="section-heading text-start">
              Why You Should Start Learning with Us?
            </h2>
            <p className="text-start mb-4">
              Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
              ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
              sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus
              gubergren sit rebum clita amet.
            </p>
            <Row className="mb-4">
              <Col
                xm={12}
                md={2}
                className="bg-primary text-white d-flex justify-content-center align-items-center"
              >
                <FaGraduationCap style={{ fontSize: "35px" }} />
              </Col>
              <Col xm={12} md={10} className="text-start">
                <h4>Skilled Instructors</h4>
                <p>
                  Labore rebum duo est Sit dolore eos sit tempor eos stet, vero
                  vero clita magna kasd no nonumy et eos dolor magna ipsum.
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col
                xm={12}
                md={2}
                className="bg-danger text-white d-flex justify-content-center align-items-center"
              >
                <FaCertificate style={{ fontSize: "35px" }} />
              </Col>
              <Col xm={12} md={10} className="text-start">
                <h4>International Certificate</h4>
                <p>
                  Labore rebum duo est Sit dolore eos sit tempor eos stet, vero
                  vero clita magna kasd no nonumy et eos dolor magna ipsum.
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col
                xm={12}
                md={2}
                className="bg-warning text-white d-flex justify-content-center align-items-center"
              >
                <FaBookReader style={{ fontSize: "35px" }} />
              </Col>
              <Col xm={12} md={10} className="text-start">
                <h4>Online Classes</h4>
                <p>
                  Labore rebum duo est Sit dolore eos sit tempor eos stet, vero
                  vero clita magna kasd no nonumy et eos dolor magna ipsum.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xm={12} md={5}>
            <img src={WhyusImage} width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
