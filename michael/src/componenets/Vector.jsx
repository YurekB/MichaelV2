import { Link } from "react-router-dom";

const Vector = () => {
  return (
    <div className="vector">
      <div>
        <h2>Let’s Work Together</h2>
        <p>
          We’re always looking for new opportunities and are comfortable working
          internationally. Please get in touch and one of our project managers
          will contact you about beginning the proposal process.
        </p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Vector;
