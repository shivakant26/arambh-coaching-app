import { Button, Col, Container, Row } from "react-bootstrap";

const OfferStudent: React.FC = () => {
  return (
    <div className="offer-for-student">
      <Container>
        <div className="offer-form">
          <h2 className="section-heading text-center">
            30% Off For New Students
          </h2>

          <form>
            <Row>
              <Col xm={12} md={6} className="mb-3">
                <input type="text" placeholder="Your Name" />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <input type="text" placeholder="Your Email" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <select>
                  <option>Select a courses</option>
                  <option>Course 1</option>
                  <option>Course 2</option>
                  <option>Course 3</option>
                </select>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Button>Sign Up Now</Button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default OfferStudent;
