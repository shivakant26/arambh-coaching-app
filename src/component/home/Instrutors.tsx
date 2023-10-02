import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ProfileImage from "../../assets/images/profile.jpg";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import UserSocialIcons from "../common/UserSocialIcons";

const Instructor: React.FC = () => {
  return (
    <div className="meet-our-instructor">
      <Container>
        <Row>
          <h2 className="section-heading text-center">Meet Our Instructors</h2>
          <Row>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
              }}
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
              }}
            >
              <SwiperSlide>
                <div className="instructor-card">
                  <div className="instructor-card-content">
                    <img src={ProfileImage} alt="profile-image" />
                    <h5>Instructor Name</h5>
                    <p>Designation</p>
                    <div className="instructor-social-icon">
                      <UserSocialIcons />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="instructor-card">
                  <div className="instructor-card-content">
                    <img src={ProfileImage} alt="profile-image" />
                    <h5>Instructor Name</h5>
                    <p>Designation</p>
                    <div className="instructor-social-icon">
                      <UserSocialIcons />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="instructor-card">
                  <div className="instructor-card-content">
                    <img src={ProfileImage} alt="profile-image" />
                    <h5>Instructor Name</h5>
                    <p>Designation</p>
                    <div className="instructor-social-icon">
                      <UserSocialIcons />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="instructor-card">
                  <div className="instructor-card-content">
                    <img src={ProfileImage} alt="profile-image" />
                    <h5>Instructor Name</h5>
                    <p>Designation</p>
                    <div className="instructor-social-icon">
                      <UserSocialIcons />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Instructor;
