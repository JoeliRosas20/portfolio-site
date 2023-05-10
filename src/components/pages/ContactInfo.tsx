import React, { useState } from "react";
import "./ContactInfo.css";

function ContactInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      <p className="contactInfo-desc">Whether its to network for tech or 
      to talk with me about something outside of tech, you can email me or chat with 
      me through Linkedin.</p>
      <h2>Contact Info</h2>
      <div className="contactInfo-myInfo">
        Gmail: joeli.rosas20@gmail.com
        <br />
        <p>
          Linkedin: <a
            href="https://www.linkedin.com/in/joel-rosas-50b653170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joel Rosas
          </a>
        </p>
      </div>
      <br/>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">First Name</label>
        <br />
        <input
          type="text"
          id="name"
          className="name-input"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        {error && firstName.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="name">Last Name</label>
        <br />
        <input
          type="text"
          id="name"
          className="name-input"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        {error && lastName.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          id="email"
          className="email-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {error && message.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="message" className="message-label">
          Message
        </label>
        <br />
        <textarea
          rows={10}
          cols={30}
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        {error && message.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ContactInfo;
