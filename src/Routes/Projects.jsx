import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Herosec2 from "../Components/Herosec2";
import Price from "../Components/Price";
import Work from "../Components/Work";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <Herosec2 heading="PROJECTS" text="|| Computers are fast ; developers keep them slow – Anonymous ||" />
      <Work/>
      {/* <Price /> */}
      <Footer />
    </div>
  );
};

export default Projects;
