import Form from "../componenets/Form";

const Contact = ({ setActivePage, activePage }) => {
  return (
    <div className="contact-page">
      <div className="contact-page-left">
        <h1>Lets work together</h1>
        <p>
          Further case studies available upon request. Please provide some
          information on your project or goals and we’ll move the conversation
          on from there.
        </p>
      </div>
      <div className="contact-page-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
