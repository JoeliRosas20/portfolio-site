import React, { useState } from "react";
import "./ContactInfo.css";

function ContactInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({})

  const onFormSubmit = (e: any) => {
    const config = {
      SecureToken: '78942da0-05f9-429a-a513-52d838b3b2f7',
      To : 'joelrosas20@yopmail.com',
      From : email,
      Subject : "This is from my contact form",
      Body : `${firstName} ${lastName} would like to connect and said:\n ${message}` 
    }
    e.preventDefault();
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      message.length == 0
    ) {
      setError(true);
    }
    if (window.Email){
      window.Email.send(config).then(() => alert("sent successfully"))
    }
  };

  const changeHandler = (event: { target: { name: any; value: any; }; }) =>{
    setFormState({...formState, [event.target.name]: event.target.value})
  }

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
      {/**The Form */}
      <form onSubmit={onFormSubmit}>
        {/**First Name */}
        <label htmlFor="name">First Name</label>
        <br />
        <input
          type="text"
          id="name"
          className="name-input"
          name="firstName"
          value={firstName||""}
          onChange={(e) => {setFirstName(e.target.value); changeHandler}}
        />
        <br />
        {error && firstName.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        {/**Last Name */}
        <label htmlFor="name">Last Name</label>
        <br />
        <input
          type="text"
          id="name"
          className="name-input"
          name="lastName"
          value={lastName||""}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        {error && lastName.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        {/**Email */}
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          id="email"
          className="email-input"
          name="email"
          value={email||""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {error && message.length <= 0 ? (
          <label className="error">It cannot be empty</label>
        ) : (
          ""
        )}
        <br />
        {/**Message */}
        <label htmlFor="message" className="message-label">
          Message
        </label>
        <br />
        <textarea
          rows={10}
          cols={30}
          id="message"
          name="message"
          value={message||""}
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
