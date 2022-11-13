import { useEffect } from "react";

const About = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("about");
    window.scrollTo(0, 0);
  }, [setActivePage]);
  return (
    <div className="about">
      <h2>About</h2>
    </div>
  );
};

export default About;
