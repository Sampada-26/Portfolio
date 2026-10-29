
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="intro">HELLO, I'M</p>

        <h1>
          Sampada <span>Kaginkar</span>
        </h1>

        <h2>
          Computer Engineering Student | Aspiring Software Developer
        </h2>

        <p className="description">
          I am passionate about software development, web technologies,
          and problem-solving. I enjoy building projects and learning
          new technologies to turn ideas into useful applications.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary-btn">
            View My Projects
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sampada-kaginkar/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="home-image">
        <img
          src="/Profile.png"
          alt="Sampada Kaginkar"
        />
      </div>
    </section>
  );
}

export default Home;
