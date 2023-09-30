import React from "react";
import Banner from "../component/home/Banner";
import AboutUs from "../component/home/AboutUs";
import { useLocation } from "react-router-dom";
import { PageData } from "../interfaces/BannerInterface";
const About : React.FC = () =>{
    const location = useLocation();
    const slug = location.pathname.replace("/", "");
    const pageBannerData: PageData = {
      pageTitle: "About",
      slug: slug,
    };
    return(
        <>  
        <Banner data={pageBannerData}/>
        <AboutUs />
        </>
    )
}

export default About;