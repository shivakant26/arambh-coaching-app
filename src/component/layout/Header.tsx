import { Container, Row, Col, Button } from "react-bootstrap";
import "./Layout.scss";
import { Link } from "react-router-dom";
import { siteMenu, socialIcon } from "../../utils/constant";
import { IMenu, ISocialIcon } from "../../interfaces/HeaderInterface";
import { ImPhone } from "react-icons/im";
import { MdMail } from "react-icons/md";

const Header : React.FC = () => {
  return (
    <div className="header">
      <div className="header_top">
        <Container>
          <Row>
            <Col xm={12} md={6}>
              <ul>
                <li>
                  <a href=""><ImPhone /> +012 345 6789</a>
                </li>
                <li>
                  <a href=""><MdMail /> mail@domain.com</a>
                </li>
              </ul>
            </Col>
            <Col xm={12} md={6}>
              <div className="social_icons">
                <ul>
                  {socialIcon?.map(
                    (socialIcons: ISocialIcon, index: number) => {
                      return (
                        <li key={index}>
                          <Link to={socialIcons.link}>{socialIcons.icon}</Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header_bottom">
        <Container>
          <Row>
            <Col xm={12} md={4}>
              <div className="logo">
                <Link to="">Aarambh Class</Link>
              </div>
            </Col>
            <Col xm={12} md={8} className="menu_wr">
              <div className="site_menu">
                <ul>
                  {siteMenu?.map((menuItem: IMenu, index: number) => {
                    return (
                      <li key={index}>
                        <Link to={menuItem.slug ? menuItem.slug : ""}>
                          {menuItem.menuLabel} {menuItem.icon}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="joinus_btn">
                <Button>Join us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
