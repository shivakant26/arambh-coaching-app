import React, { useEffect } from "react";
import Contactus from "../component/home/Contactus";
import Banner from "../component/home/Banner";
import { useLocation } from "react-router-dom";
import { PageData } from "../interfaces/BannerInterface";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData } from "../redux/serviceSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";

const Contact: React.FC = () => {

  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  // const response = useSelector((state)=>state);

  const slug = location.pathname.replace("/", "");
  const pageBannerData: PageData = {
    pageTitle: "Contact",
    slug: slug,
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <Banner data={pageBannerData} />
      <Contactus />
    </>
  );
};

export default Contact;
