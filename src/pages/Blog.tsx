import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/blogSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Banner from "../component/home/Banner";
import { PageData } from "../interfaces/BannerInterface";
import { useLocation } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import { RootState } from "../redux/Store";
import Loader from "../component/common/Loader";

type YourPostType = {
  _id: string;
  title?: string;
  description: string;
  createdAt: string;
  __v: number;
};

interface BlogState {
  posts: {
    data: YourPostType[];
  };
}

const Blog = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const pageBannerData: PageData = {
    pageTitle: "Blogs",
    slug: slug,
  };
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { data: posts } = useSelector(
    (state: { blog: BlogState }) => state.blog.posts
  );
  const { loading } = useSelector((state: RootState) => state?.blog);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      <Banner data={pageBannerData} />
      <div className="blog-posts">
        <Container>
          {loading === true ? (
            <div className="loading-screen"><Loader/></div>
          ) : (
            <>
            <Row>
                <div className="blog-search">
                    <input type="text" placeholder="search ..."/>
                </div>
            </Row>
              <div className="all-blogs">
                {posts?.length > 0 ? (
                  <>
                    {posts.map((post, index) => {
                      return (
                        <div className="blogs" key={index}>
                          <h2>{post.title}</h2>
                          <p>{post.description}</p>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default Blog;
