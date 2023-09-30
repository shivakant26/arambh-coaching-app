import { Container } from "react-bootstrap";
import { BannerProps } from "../../interfaces/BannerInterface";
import { FaAngleDoubleRight } from "react-icons/fa";

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="banner-section">
      <Container>
        <div className="site-banner">
          {data.subTitle && <h4>{data.subTitle}</h4>}
          <h1>{data.pageTitle ? data.pageTitle : "Education Courses"}</h1>
          {data.slug && (
            <div className="breadcamb">
              Home <FaAngleDoubleRight />
              <span>{data.slug}</span>
            </div>
          )}
          <select>
            <option>Course 1</option>
            <option>Course 2</option>
            <option>Course 3</option>
          </select>
          <input type="text" placeholder="Keyword" />
          <button>Search</button>
        </div>
      </Container>
      <div className="overlay"></div>
    </div>
  );
};

export default Banner;
