import { useEffect } from "react";

const About = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("about");
  }, [setActivePage]);
  return (
    <div className="about">
      <h2>About</h2>
    </div>
  );
};

export default About;
