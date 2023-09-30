import { useLocation } from "react-router-dom";
import Banner from "../component/home/Banner";
import OurCourses from "../component/home/OurCourses";
import { PageData } from "../interfaces/BannerInterface";

const Course : React.FC = () =>{
    const location = useLocation();
    const slug = location.pathname.replace("/", "");
    const pageBannerData: PageData = {
      pageTitle: "Course",
      slug: slug,
    };
    return(
        <>
        <Banner data={pageBannerData}/>
        <OurCourses />
        </>

    )
}

export default Course;