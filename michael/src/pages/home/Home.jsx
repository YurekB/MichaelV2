import { useEffect } from "react";
import Vector from "../../componenets/Vector";
import { Link } from "react-router-dom";
import HomeProjects from "../../componenets/homeProjects";
import { MainImage, Text, TextContainer } from "./styles";
import mainImg from "../../assets/cranbrook/4.jpg";

const Home = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("home");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <div className="home">
      <div className="home-top">
        <h2 className="home-top-text">
          Creating <b>innovative</b> and <b>unique</b> living spaces for all
          domestic and commercial Clients in and around Manchester (Prestwich).
          We are specialising in new build housing, domestic works, extensions,
          loft conversions, whole house refurbishment and remodeling.
          <br />
          <br />
          <b>Our services:</b> <br />- flexible choice on services to suit
          client’s needs
          <br /> - fixed rates and quick delivery of documentation
          <br /> - professional advice on all aspect of project and construction
        </h2>

        <MainImage className="main-img" src={mainImg} alt="home page" />

        <h3>Some of our work</h3>
      </div>
      <HomeProjects />
      <Vector />
    </div>
  );
};

export default Home;
