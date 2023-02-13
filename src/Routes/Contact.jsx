import React from "react";
import "../index.css"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Herosec2 from "../Components/Herosec2";
import Form from "../Components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Herosec2 heading="Contact Me" text=" || If You have any Query Contact Me ||" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
