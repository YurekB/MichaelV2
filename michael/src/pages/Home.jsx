import { useEffect } from "react";
import Vector from "../componenets/Vector";

const Home = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("home");
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
        <h3>Recent Works</h3>
        <p>
          Our practice spans from environmental retrofits of existing buildings
          to the complete planning and design of new neighborhoods and public
          spaces. While our work is aesthetically diverse, our projects are
          linked by a focus on enhancing human relationships through
          architecture.
        </p>
      </div>
      <div className="home-project-pics">
        <div className="main-image-1">
          <img src="/images/temp/fill1.jpeg" alt="fill1" />
          <p>Project one</p>
        </div>
        <div className="main-image-2">
          <img src="/images/temp/fill2.jpeg" alt="fill2" />
          <p>Project two</p>
        </div>
        <div className="main-image-3">
          <img src="/images/temp/fill3.jpeg" alt="fill3" />
          <p>Project three</p>
        </div>
        <div className="main-image-4">
          <img src="/images/temp/fill4.jpeg" alt="fill4" />
          <p>Project four</p>
        </div>
      </div>
      <Vector />
    </div>
  );
};

export default Home;
