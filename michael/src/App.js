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
import ProjectsNew from "./pages/ProjectsNew";
import Windermere from "./pages/windermere";
import Leinster from "./pages/Leinster";
import Ladysmith from "./pages/ladysmith";
import Wilton from "./pages/Wilton";
import Chretien from "./pages/Chretien";
import Unsworth from "./pages/unsworth";
import Rectory from "./pages/Rectory";
import Artisan from "./pages/Artisan";
import Sandycroft from "./pages/Sandycroft";
import Mount from "./pages/mount";
import Evelyn from "./pages/Evelyn";
import Lillie from "./pages/lillie";
import Kingscliffe from "./pages/kingscliffe";
import Garricks from "./pages/Garricks";
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
              <ProjectsNew
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact activePage={activePage} setActivePage={setActivePage} />
            }
          />

          <Route
            path="/windermere"
            element={
              <Windermere
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/leinster"
            element={
              <Leinster activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/lillie"
            element={
              <Lillie activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/kingscliffe"
            element={
              <Kingscliffe
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/garricks"
            element={
              <Garricks activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/mount"
            element={
              <Mount activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/evelyn"
            element={
              <Evelyn activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/artisan"
            element={
              <Artisan activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/sandycroft"
            element={
              <Sandycroft
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/ladysmith"
            element={
              <Ladysmith
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/rectory"
            element={
              <Rectory activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/unsworth"
            element={
              <Unsworth activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/wilton"
            element={
              <Wilton activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/chretien"
            element={
              <Chretien activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/pruszowice"
            element={
              <Pruszowice
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/cranbrook"
            element={
              <Cranbrook
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/cuckoo"
            element={
              <Cuckoo activePage={activePage} setActivePage={setActivePage} />
            }
          />
          <Route
            path="/amerland"
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
