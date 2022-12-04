import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ activePage }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="header-title">
        <h1 onClick={onClick}>Michael Cupial</h1>
      </div>
      <div className="links">
        <Link className={activePage === "home" ? "active" : ""} to="/">
          Home
        </Link>
        <Link className={activePage === "about" ? "active" : ""} to="/about">
          About
        </Link>
        <Link
          className={activePage === "projects" ? "active" : ""}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={activePage === "contact" ? "active" : ""}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
