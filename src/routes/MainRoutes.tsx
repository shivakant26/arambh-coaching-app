import { Routes, Route } from "react-router-dom";
import RootLayout from "../component/layout/MainLayout";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Course from "../pages/Course";
import Contact from "../pages/Contact";
const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
