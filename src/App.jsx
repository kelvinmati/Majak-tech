import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";
function App() {
  return (
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
