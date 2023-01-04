import Form from "../../componenets/form";
import { useEffect } from "react";
import { ContactAdd, Text } from "./styles";

const Contact = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("contact");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <div className="contact-page">
      <div className="contact-page-left">
        <h1>Lets work together</h1>
        <p>
          We are based in Prestwich and offer a range of contemporary, creative
          and personal architectural services. Using our extensive expertise we
          will guide you through all aspects of building design, construction
          and project management.
        </p>
        <ContactAdd>
          <Text>123 Demo Street Copenhagen, Denmark</Text>
          <Text>(555) 555-5555 email@example.com</Text>
        </ContactAdd>
      </div>
      <div className="contact-page-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
