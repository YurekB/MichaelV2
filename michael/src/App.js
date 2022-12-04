import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./pages/home/Home";
import About from "./pages/about";
import Projects from "./pages/Projects";
import Footer from "./componenets/Footer";
import { useEffect, useState } from "react";
import IndividualProject from "./pages/individualProject";
import Contact from "./pages/contact/Contact";
import Pruszowice from "./pages/pruszowice";
import Cranbrook from "./pages/cranbrook";
import Cuckoo from "./pages/cuckoo";
import Amerland from "./pages/amerland";
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
          <Route
            path="/projects/pruszowice"
            element={
              <Pruszowice
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/projects/cranbrook"
            element={
              <Cranbrook
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/projects/cuckoo"
            element={
              <Cuckoo activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/projects/amerland"
            element={
              <Amerland activePage={activePage} setActivePage={setActivePage} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
