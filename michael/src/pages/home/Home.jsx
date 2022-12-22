import { useEffect } from "react";
import Vector from "../../componenets/Vector";
import { Link } from "react-router-dom";
import HomeProjects from "../../componenets/homeProjects";
import { Text, TextContainer } from "./styles";

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
        <TextContainer>
          <Text>
            Creating <b>innovative </b>and <b>unique </b>living spaces for all
            domestic and commercial Clients in and around Manchester
            (Prestwich).
            <br />
            <br /> We are specialising in new build housing, domestic works,
            extensions, loft conversions, whole house refurbishment and
            remodelling.
          </Text>
        </TextContainer>
        <h3>Some of our work</h3>
      </div>
      <HomeProjects />
      <Vector />
    </div>
  );
};

export default Home;
