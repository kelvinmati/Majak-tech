import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import MyBlog from "./components/MyBlog";
import Branding from "./components/serviceRoutes/Branding";
import Consultation from "./components/serviceRoutes/Consultation";
import DigitalMarketing from "./components/serviceRoutes/DigitalMarketing";
import Training from "./components/serviceRoutes/Training";
import WebDesign from "./components/serviceRoutes/WebDesign";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <WhatWeDo />
                <Mission />
                <WhyUs />
                <Contact />
              </>
            }
          />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />

          <Route path="myblog" element={<MyBlog />} />
          <Route path="services/web-design" element={<WebDesign />} />
          <Route path="services/training" element={<Training />} />
          <Route path="services/consultation" element={<Consultation />} />
          <Route path="services/branding" element={<Branding />} />
          <Route
            path="services/digital-marketing"
            element={<DigitalMarketing />}
          />
        </Routes>
        <Footer />
      </Router>
      <div className=" z-20 fixed sm:right-12 right-3   bottom-6 sm:bottom-10  ">
        <div>
          <a
            href="https://wa.me/254714851266"
            className="flex  space-x-3 items-center bg-white text-mainGreen shadow-lg px-3 py-2 font-bold rounded-full justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon size="large" name="logo-whatsapp"></ion-icon>
            <div>
              <p>Chat with us</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
