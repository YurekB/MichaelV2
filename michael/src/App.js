import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import Projects from "./pages/Projects";
import Footer from "./componenets/Footer";
import { useState } from "react";
import IndividualProject from "./pages/IndividualProject";
import Contact from "./pages/contact/Contact";
function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <BrowserRouter>
      <div className="App">
        <Header activePage={activePage} />
        <Routes>
          <Route
            path="/"
            element={
              <Home activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/about"
            element={
              <About activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/projects/:project_id"
            element={
              <IndividualProject
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
