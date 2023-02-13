import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Herosec2 from "../Components/Herosec2";
import AboutContent from "../Components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <Herosec2 heading="About" text=" || Computers are good at following instructions, but not at reading your mind ||" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
