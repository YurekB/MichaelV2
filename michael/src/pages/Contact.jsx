import { useEffect } from "react";
import { useState } from "react";

const Contact = ({ setActivePage, activePage }) => {
  const [submitted, setSubmitted] = useState(false);

  const FORM_ENDPOINT = process.env.REACT_APP_FORM;
  const FORM_ENDPOINT_TEST = process.env.REACT_APP_FORM_TEST;

  useEffect(() => {
    setActivePage("contact");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="thankYou">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div className="contactPage">
      <h2>Contact Us</h2>
      <form
        action={FORM_ENDPOINT_TEST}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        class="form"
      >
        <div>
          <input
            className="name"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div>
          <input
            className="email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div>
          <textarea
            className="message"
            placeholder="Your message"
            name="message"
            required
          />
        </div>
        <div>
          <button class="button btn-hover color-8" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
