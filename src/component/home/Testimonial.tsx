import React, {useRef , useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProfileImage from "../../assets/images/profile.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";

const Testimonial: React.FC  = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState(false);
  return (
    <div className="testimonial_section">
      <Container>
        <Row>
          <Col md={5}>
            <h2 className="section-heading text-start">
              What Say Our Students
            </h2>
            <p className="text-start">
              Dolor est dolores et nonumy sit labore dolores est sed rebum amet,
              justo duo ipsum sanctus dolore magna rebum sit et. Diam lorem ea
              sea at. Nonumy et at at sed justo est nonumy tempor. Vero sea ea
              eirmod, elitr ea amet diam ipsum at amet. Erat sed stet eos ipsum
              diam
            </p>
          </Col>
          <Col md={7}>
            <Row className="student-remark">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={() => setInit(true)}
              >
                <SwiperSlide>
                  <div className="student-card">
                    <div className="student-card-content">
                      <div className="text-start quote">
                        <FaQuoteLeft />
                      </div>
                      <p>
                        Sed et elitr ipsum labore dolor diam, ipsum duo vero sed
                        sit est est ipsum eos clita est ipsum. Est nonumy tempor
                        at kasd. Sed at dolor duo ut dolor, et justo erat dolor
                        magna sed stet amet elitr duo lorem
                      </p>
                      <Row>
                        <Col md={2}>
                          <img src={ProfileImage} height="80px" width="80px" />
                        </Col>
                        <Col md={10} className="text-start">
                          <h5>Amit Verma</h5>
                          <p>Mathmatics</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="student-card">
                    <div className="student-card-content">
                      <div className="text-start quote">
                        <FaQuoteLeft />
                      </div>
                      <p>
                        Sed et elitr ipsum labore dolor diam, ipsum duo vero sed
                        sit est est ipsum eos clita est ipsum. Est nonumy tempor
                        at kasd. Sed at dolor duo ut dolor, et justo erat dolor
                        magna sed stet amet elitr duo lorem
                      </p>
                      <Row>
                        <Col md={2}>
                          <img src={ProfileImage} height="80px" width="80px" />
                        </Col>
                        <Col md={10} className="text-start">
                          <h5>Depesh Asati</h5>
                          <p>Computer Course</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="student-card">
                    <div className="student-card-content">
                      <div className="text-start quote">
                        <FaQuoteLeft />
                      </div>
                      <p>
                        Sed et elitr ipsum labore dolor diam, ipsum duo vero sed
                        sit est est ipsum eos clita est ipsum. Est nonumy tempor
                        at kasd. Sed at dolor duo ut dolor, et justo erat dolor
                        magna sed stet amet elitr duo lorem
                      </p>
                      <Row>
                        <Col md={2}>
                          <img src={ProfileImage} height="80px" width="80px" />
                        </Col>
                        <Col md={10} className="text-start">
                          <h5>Mukesh kumar</h5>
                          <p>Web Development</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="student-card">
                    <div className="student-card-content">
                      <div className="text-start quote">
                        <FaQuoteLeft />
                      </div>
                      <p>
                        Sed et elitr ipsum labore dolor diam, ipsum duo vero sed
                        sit est est ipsum eos clita est ipsum. Est nonumy tempor
                        at kasd. Sed at dolor duo ut dolor, et justo erat dolor
                        magna sed stet amet elitr duo lorem
                      </p>
                      <Row>
                        <Col md={2}>
                          <img src={ProfileImage} height="80px" width="80px" />
                        </Col>
                        <Col md={10} className="text-start">
                          <h5>Student Name</h5>
                          <p>Course Name</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="slider_btn_group">
                <button className="prev-btn bg-danger" ref={prevRef}>
                  <FaAngleLeft />
                </button>
                <button className="next-btn bg-primary" ref={nextRef}>
                  <FaAngleRight />
                </button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
