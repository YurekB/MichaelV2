import { useEffect } from "react";

const Contact = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("contact");
  }, [setActivePage]);
  return (
    <div className="contact">
      <h2>contact</h2>
    </div>
  );
};

export default Contact;
