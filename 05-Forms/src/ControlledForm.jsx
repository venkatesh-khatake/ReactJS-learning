import React from "react";
import { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const [message, setMessage] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();
  setMessage(
    `Hello ${formData.name}
Email: ${formData.email}
Password: ${formData.password}`
  );
};
  return <div>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
        <br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email"/>
        <br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <br />
        <button type="submit">Submit</button>
    </form>

    <h1>{message}</h1>
  </div>;
};

export default ControlledForm;
