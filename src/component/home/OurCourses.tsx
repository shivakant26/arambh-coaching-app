import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OurCourses: React.FC = () => {
  return (
    <div className="our-courses">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col md={6}>
            <h2 className="section-heading text-center">
              Checkout New Releases Of Our Courses
            </h2>
          </Col>
        </Row>
        <Row>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              787: {
                slidesPerView: 3,
              },
              980: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="course-card">
                <div className="course-card-content">
                  <h5>Web Design & Development courses for beginners</h5>
                  <Row className="course-card-footer">
                    <Col md={6} className="mt-2">
                      Jhon Doe
                    </Col>
                    <Col md={6} className="mt-2">
                      4.5(250)
                    </Col>
                  </Row>
                </div>
                <div className="overlay"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <div className="course-card-content">
                  <h5>Web Design & Development courses for beginners</h5>
                  <Row className="course-card-footer">
                    <Col md={6} className="mt-2">
                      Jhon Doe
                    </Col>
                    <Col md={6} className="mt-2">
                      4.5(250)
                    </Col>
                  </Row>
                </div>
                <div className="overlay"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <div className="course-card-content">
                  <h5>Web Design & Development courses for beginners</h5>
                  <Row className="course-card-footer">
                    <Col md={6} className="mt-2">
                      Jhon Doe
                    </Col>
                    <Col md={6} className="mt-2">
                      4.5(250)
                    </Col>
                  </Row>
                </div>
                <div className="overlay"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <div className="course-card-content">
                  <h5>Web Design & Development courses for beginners</h5>
                  <Row className="course-card-footer">
                    <Col md={6} className="mt-2">
                      Jhon Doe
                    </Col>
                    <Col md={6} className="mt-2">
                      4.5(250)
                    </Col>
                  </Row>
                </div>
                <div className="overlay"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default OurCourses;
