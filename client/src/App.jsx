
import { useEffect, useLayoutEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function Portfolio() {
  return (
    <main className="portfolio-page">
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function StandalonePage({ children }) {
  return <main className="standalone-page">{children}</main>;
}

function AppRoutes() {
  const location = useLocation();
  const [theme, setTheme] = useState(
    () =>
      window.localStorage.getItem("portfolio-theme") === "light"
        ? "light"
        : "dark",
  );

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    if (window.location.pathname === "/" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#080808" : "#f7f5f0");
  }, [theme]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
      />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/about"
          element={<StandalonePage><About /></StandalonePage>}
        />
        <Route
          path="/education"
          element={<StandalonePage><Education /></StandalonePage>}
        />
        <Route
          path="/experience"
          element={<StandalonePage><Experience /></StandalonePage>}
        />
        <Route
          path="/skills"
          element={<StandalonePage><Skills /></StandalonePage>}
        />
        <Route
          path="/projects"
          element={<StandalonePage><Projects /></StandalonePage>}
        />
        <Route path="/achievements" element={<Navigate to="/" replace />} />
        <Route
          path="/contact"
          element={<StandalonePage><Contact /></StandalonePage>}
        />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
