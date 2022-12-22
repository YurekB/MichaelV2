import { Link } from "react-router-dom";

const Vector = () => {
  return (
    <div className="vector">
      <div>
        <h2>Let’s Work Together</h2>
        <p>
          We’re always looking for new opportunities and are comfortable working
          nationally. Please get in touch and we will contact you about
          beginning the development journey.
        </p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Vector;
