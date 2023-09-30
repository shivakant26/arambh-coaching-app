import Banner from "../component/home/Banner";
import About from "../component/home/AboutUs";
import WhyChooseUs from "../component/home/WhyChooseUs";
import OurCourses from "../component/home/OurCourses";
import OfferStudent from "../component/home/OfferStudent";
import Instructor from "../component/home/Instrutors";
import Testimonial from "../component/home/Testimonial";
import Contactus from "../component/home/Contactus";
import { PageData } from "../interfaces/BannerInterface";

const Homepage: React.FC = () => {
  const object : PageData = {
    subTitle:"Learn From Home",
    pageTitle: "Education Courses",
  }
  return (
    <>
      <Banner data={object}/>
      <About />
      <WhyChooseUs />
      <OurCourses />
      <OfferStudent />
      <Instructor />
      <Testimonial />
      <Contactus />
    </>
  );
};

export default Homepage;
