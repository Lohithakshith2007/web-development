import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function SubmitForm(event) {
    event.preventDefault();
    console.log(name, email, message);
  }

  function ClearForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <form style={{ display: "block" }}>
        {/* input fields for contact form */}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <input type="submit" onClick={SubmitForm} />
        <button onClick={ClearForm}>clear form</button>
      </form>
    </>
  );
}

export default ContactForm;
