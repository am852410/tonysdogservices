import React, {useState} from "react";
import ImageLeft from "../assets/pup.jpeg";
import "../styles/Contact.css";


function Contact() {
  
  // create state variables called subject and body
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const onChangeName = (event) => {
    event.preventDefault()
    const name = event.target.value
    const newSubject = `New E-mail from ${name}`
    setSubject(newSubject)
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImageLeft})` }}
      />
      <div className="rightSide">
        <h1>Contact Antonio</h1>

        <h2>If you have any questions, suggestions or feedback I would love to hear from you!</h2>
        

        <div id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name" type="text" onChange={onChangeName} />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            onChange={event => {event.preventDefault();setBody(event.target.value)}}
          >
            {" "}
          </textarea>
          <a href={`mailto:tonysdogsunltd@gmail.com?subject=${subject}&body=${body}`}><button> Send Message </button></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
