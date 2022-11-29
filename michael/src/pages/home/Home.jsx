import { useEffect } from "react";
import Vector from "../../componenets/Vector";
import { Link } from "react-router-dom";
import HomeProjects from "../../componenets/homeProjects";

const Home = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("home");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <div className="home">
      <div className="home-top">
        <h2 className="home-top-text">
          Michael Cupial is an architecture firm based in Manchester, England
        </h2>

        <img
          className="main-img"
          src="/images/mainwide.jpg"
          alt="back extension of house"
        />
        <h3>Some of our work</h3>
      </div>
      <HomeProjects />
      <Vector />
    </div>
  );
};

export default Home;
