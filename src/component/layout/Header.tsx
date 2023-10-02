import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Layout.scss";
import { Link } from "react-router-dom";
import { siteMenu, socialIcon } from "../../utils/constant";
import { IMenu, ISocialIcon } from "../../interfaces/HeaderInterface";
import { ImPhone } from "react-icons/im";
import { MdMail } from "react-icons/md";
import Menu from "./Menu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="header">
      <div className="header_top">
        <Container>
          <Row>
            <Col xm={12} md={6}>
              <div className="web_info">
                <ul>
                  <li>
                    <a href="">
                      <ImPhone /> +012 345 6789
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <MdMail /> mail@domain.com
                    </a>
                  </li>
                </ul>
              </div>
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
            <Col xs={10} md={12} lg={4}>
              <div className="logo">
                <Link to="">Aarambh Class</Link>
              </div>
            </Col>
            <Col xs={2} md={12} lg={8}>
              <div className="menu_wr">
                <div className="site_menu">
                  <ul>
                    {siteMenu?.map((menuItem: IMenu, index: number) => {
                      return <Menu menuItem={menuItem} index={index} />;
                    })}
                  </ul>
                </div>
                <div className="joinus_btn">
                  <Button>Join us</Button>
                </div>
              </div>
              <div className="mobile-menu">
                <Button onClick={toggleMobileMenu}>☰</Button>
                {isMobileMenuOpen && (
                  <div className="mobile-menu-sidebar">
                    <ul>
                      {siteMenu?.map((menuItem: IMenu, index: number) => (
                        <Menu key={index} menuItem={menuItem} index={index} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
