import React, { useState } from "react";
import "./ContactInfo.css";

function ContactInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      message.length == 0
    ) {
      setError(true);
    }
  };

  return (
    <div className="contactInfo-container">
      <h1>Let's connect!!!</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">First Name</label>
        <br />
        <input type="text" id="name" className="name-input" />
        <br />
        {error && firstName.length <= 0 ? <label>It cannot be empty</label> : ""}
        <br />
        <label htmlFor="name">Last Name</label>
        <br />
        <input type="text" id="name" className="name-input" />
        <br />
        {error && lastName.length <= 0 ? <label>It cannot be empty</label> : ""}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" className="email-input" />
        <br />
        {error && message.length <= 0 ? <label>It cannot be empty</label> : ""}
        <br />
        <label htmlFor="message" className="message-label">
          Message
        </label>
        <br />
        <textarea rows={10} cols={30} id="message"></textarea>
        <br />
        {error && message.length <= 0 ? <label>It cannot be empty</label> : ""}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ContactInfo;
