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
          <Text>21 Sunnyfield Road Prestwich, M25 2RD</Text>
          <Text>
            07742 524783{" "}
            <a href="mailto:michael@cupial.co.uk">michael@cupial.co.uk</a>
          </Text>
        </ContactAdd>
      </div>
      <div className="contact-page-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
