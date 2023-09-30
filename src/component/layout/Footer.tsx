import { Container, Row, Col, Button } from "react-bootstrap";
import {
  MdOutlineKeyboardArrowRight,
  MdLocationPin,
  MdMail,
} from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { ourCourse, quickLink } from "../../utils/constant";
import { Link } from "react-router-dom";
import { IOurCourse, IQuickLink } from "../../interfaces/FooterInterface";

const Footer : React.FC = () => {
  return (
    <div>
      <div className="footer_section">
        <div className="footer_top">
          <Container>
            <Row>
              <Col xm={12} md={6} className="footer_site_logo">
                <Link to="/">Aarambh Class</Link>
                <p>
                  Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea
                  lorem at et diam est, tempor rebum ipsum sit ea tempor stet et
                  consetetur dolores. Justo stet diam ipsum lorem vero clita
                  diam
                </p>
              </Col>
              <Col xm={12} md={6} className="news-latter">
                <h4>Newsletter</h4>
                <div className="email-field">
                  <input type="text" placeholder="Email" />
                  <Button>Sign Up</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer_middle">
          <Container>
            <Row>
              <Col xm={12} md={4}>
                <h4>Get In Touch</h4>
                <p className="d-flex align-items-center" style={{gap:"10px"}}>
                  <MdLocationPin />
                  123 Street, New York, USA
                </p>
                <p className="d-flex align-items-center" style={{gap:"10px"}}>
                  <ImPhone />
                  +012 345 67890
                </p>
                <p className="d-flex align-items-center" style={{gap:"10px"}}>
                  <MdMail />
                  mail@domain.com
                </p>
              </Col>
              <Col xm={12} md={4} className="our-course">
                <h4>Our Courses</h4>
                <ul>
                {ourCourse?.map((course : IOurCourse, index:number) => {
                  return (
                    <li key={index}>
                      <MdOutlineKeyboardArrowRight />
                      <Link to={course.link}>{course.courseName}</Link>
                    </li>
                  );
                })}
                </ul>
              </Col>
              <Col xm={12} md={4} className="quick-link">
                <h4>Quick Links</h4>
                <ul>
                  {quickLink?.map((qlink: IQuickLink, index: number) => {
                    return (
                      <li key={index}>
                        <MdOutlineKeyboardArrowRight/>
                        <Link to={qlink.link}>{qlink.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer_bottom">
          <Container>
            <Row>
              <Col xm={12} md={6}>
                <p>Copyright © <a href="#">Aarambh Class</a>. All Rights Reserved.</p>
              </Col>
              <Col xm={12} md={6} className="text-end">
                <p>Designed by HTML Codex</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
