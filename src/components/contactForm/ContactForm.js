import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <label>Enter your Name:
        <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
      </label>
      <label>Enter your Email:
        <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      </label>
      <label>Enter your Phone Number:
        <input 
        type="tel" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="^((?:0|\+44)\s?\d{4}\s?\d{6})$" 
        required/>
      </label>
        <input type="submit"></input>
    </form>
  );
};

