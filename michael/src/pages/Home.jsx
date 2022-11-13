import { useEffect } from "react";
import Vector from "../componenets/Vector";
import { Link } from "react-router-dom";

const Home = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("home");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <div className="home">
      <div className="home-top">
        <h2 className="home-top-text">
          Utica is an architecture firm based in Copenhagen, Denmark.
        </h2>

        <img
          className="main-img"
          src="/images/mainwide.jpg"
          alt="back extension of house"
        />
        <h3>Recent Work</h3>
        <p className="recent-text">
          Our practice spans from environmental retrofits of existing buildings
          to the complete planning and design of new neighborhoods and public
          spaces. While our work is aesthetically diverse, our projects are
          linked by a focus on enhancing human relationships through
          architecture.
        </p>
      </div>
      <div className="home-project-pics">
        <div className="main-image-1">
          <Link to="/projects/1">
            <img src="/images/temp/fill1.jpeg" alt="fill1" />
            <p>Project one</p>
          </Link>
        </div>

        <div className="main-image-2">
          <Link to="/projects/2">
            <img src="/images/temp/fill2.jpeg" alt="fill2" />
            <p>Project two</p>
          </Link>
        </div>
        <div className="main-image-3">
          <Link to="/projects/3">
            <img src="/images/temp/fill3.jpeg" alt="fill3" />
            <p>Project three</p>
          </Link>
        </div>
        <div className="main-image-4">
          <Link to="/projects/4">
            <img src="/images/temp/fill4.jpeg" alt="fill4" />
            <p>Project four</p>
          </Link>
        </div>
      </div>
      <Vector />
    </div>
  );
};

export default Home;
