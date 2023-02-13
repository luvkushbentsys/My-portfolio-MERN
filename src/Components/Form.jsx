import "./Form.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Form = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    massege: "",
  });

  const handelchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const validtion = () => {
    if (
      state?.name === "" &&
      state?.email === "" &&
      state?.subject === "" &&
      state?.massege === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "All field is required",
        icon: "error",
        confirmButtonText: "ok",
      });
      return false;
    } else if (state?.name === "") {
      Swal.fire({
        title: "Error!",
        text: "name is required",
        icon: "error",
        confirmButtonText: "ok",
      });
      return false;
    } else if (state?.email === "") {
      Swal.fire({
        title: "Error!",
        text: "email is required",
        icon: "error",
        confirmButtonText: "ok",
      });
      return false;
    } else if (state?.subject === "") {
      Swal.fire({
        title: "Error!",
        text: "subject is required",
        icon: "error",
        confirmButtonText: "ok",
      });
      return false;
    } else if (state?.massege === "") {
      Swal.fire({
        title: "Error!",
        text: "massage is required",
        icon: "error",
        confirmButtonText: "ok",
      });
      return false;
    }
    return true;
  };

  const submitValue = () => {
    if (validtion()) {
      let body = {
        name: state?.name,
        email: state?.email,
        subject: state?.subject,
        massege: state?.massege,
      };
      axios.post("http://localhost:3200/submit", body).then((resp) => {
        if (resp?.status === 200) {
          Swal.fire({
            title: "Success",
            text: "Thank You for Contacting Us",
            icon: "success",
            confirmButtonText: "ok",
          });
          navigate("/");
        }
      });
    }
  };

  //-----------------------------------

  return (
    <div className="Form">
      <form>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={state?.name}
          onChange={handelchange}
          placeholder="Enter Your Name"
        />
        <label>Your Email</label>
        <input
          type="email"
          name="email"
          value={state?.email}
          onChange={handelchange}
          placeholder="Enter Your Email"
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={state?.subject}
          onChange={handelchange}
          placeholder="Your Subject"
        />
        <label>Massage</label>
        <textarea
          name="massege"
          value={state?.massege}
          onChange={handelchange}
          placeholder="Type Your Massege"
          rows="6"
        />
        <button type="button" className="btn" onClick={submitValue}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
