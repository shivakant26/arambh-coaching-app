import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ImPhone } from "react-icons/im";
import { MdLocationPin, MdMail } from "react-icons/md";

const Contactus: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="contactus-section">
      <Container>
        <Row>
          <Col md={5}>
            <div className="our-location">
              <Row className="mb-5">
                <Col
                  xm={12}
                  md={2}
                  className="bg-primary text-white d-flex justify-content-center align-items-center"
                >
                  <MdLocationPin style={{ fontSize: "35px" }} />
                </Col>
                <Col xm={12} md={10} className="text-start">
                  <h4>Our Location</h4>
                  <p>123 Street, New York, USA </p>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col
                  xm={12}
                  md={2}
                  className="bg-danger text-white d-flex justify-content-center align-items-center"
                >
                  <ImPhone style={{ fontSize: "35px" }} />
                </Col>
                <Col xm={12} md={10} className="text-start">
                  <h4>Call Us</h4>
                  <p>+012 345 6789</p>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col
                  xm={12}
                  md={2}
                  className="bg-warning text-white d-flex justify-content-center align-items-center"
                >
                  <MdMail style={{ fontSize: "35px" }} />
                </Col>
                <Col xm={12} md={10} className="text-start">
                  <h4>Email Us</h4>
                  <p>mail@domain.com</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={7}>
            <h2 className="sec-heading text-center display-4">
              Send Us A Message
            </h2>
            <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xs={12} md={6} className="mb-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      className={errors?.firstName ? "error-border" : ""}
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <input
                      type="text"
                      placeholder="Your Email"
                      {...register("email", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      className={errors?.email ? "error-border" : ""}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} className="mb-3">
                    <input
                      type="text"
                      placeholder="Subject"
                      {...register("subject", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      className={errors?.subject ? "error-border" : ""}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} className="mb-3">
                    <textarea
                      rows={5}
                      placeholder="Message"
                      {...register("message", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      className={errors?.message ? "error-border" : ""}
                    ></textarea>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button type="submit">Send Message</Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contactus;
