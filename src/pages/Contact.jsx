import { useState } from "react";

let isEmailValid = false;
let isMessageValid = false;

export default function Contact(props) {


  const defaultInfo = { name: "", email: "", message: "" }
  const [contactInfo, setContactInfo] = useState(defaultInfo);

  // Handles changing the display whenever something is typed in the form fields
  const handleInputChange = ({ target: { name, value } }) => {
    const submitBtnElem = document.querySelector(".submit-btn");
    const validEmailElem = document.querySelector(".valid-email");
    const validMessageElem = document.querySelector(".valid-message");

    setContactInfo({ ...contactInfo, [name]: value })

    if (name === "email") {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isEmailValid = emailRegex.test(value);
      isEmailValid ? validEmailElem.setAttribute("style", "display: none") : validEmailElem.setAttribute("style", "display: block");
    }

    if (name === "message") {
      isMessageValid = !!value;
      isMessageValid ? validMessageElem.setAttribute("style", "display: none") : validMessageElem.setAttribute("style", "display: block");
    }

    // Displays or hides the button depending if email and message are valid
    if (isEmailValid && isMessageValid) {
      console.log("working")
      submitBtnElem.setAttribute("style", "display: block");
    } else {
      submitBtnElem.setAttribute("style", "display: none");
    }
  }

  // Handles what to do with the submitted info
  const handleSubmit = () => {
    console.log(contactInfo);
  }



  return (
    <>
      <div className="container-fluid col-6">
        <div className="mb-3">
          <label htmlFor="name" className="form-label form-input">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={contactInfo.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label form-input">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" value={contactInfo.email} onChange={handleInputChange} placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label form-input">Message</label>
          <textarea className="form-control" id="message" name="message" cols="30" rows="10" value={contactInfo.message} onChange={handleInputChange}></textarea>
        </div>
        <p className="valid-email validation">Requires a valid email</p>
        <p className="valid-message validation">Requires a message</p>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </>


  )
}