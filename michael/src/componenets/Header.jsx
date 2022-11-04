import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header title">
        <h1>Michael Cupial Architect</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
