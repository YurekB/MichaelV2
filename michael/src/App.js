import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./componenets/Footer";
import { useState } from "react";
function App() {
  const [activePage, setActivePage] = useState("home");
  console.log(activePage, "ACTIVEPAGE");
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
