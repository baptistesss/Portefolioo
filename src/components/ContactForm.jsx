import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="forms">
        <h2>Envie de m'envoyer un message ?</h2>
        {isSubmitted ? (
          <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
        ) : (
          <form onSubmit={handleSubmit} className="forms">
            <div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nom"
              />
            </div>
            <div>
              <input
                type="text"
                id="name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                placeholder="Prénom"
              />
            </div>
            <div>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
              ></textarea>
            </div>
            <div className="submit">
              <button type="submit" className="buttons">
                Envoyer
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
