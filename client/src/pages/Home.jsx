
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

function Home() {
  const labels = [
    "FRONTEND",
    "IT ENGINEERING",
    "AI - ML",
    "BACKEND",
    "DATABASE",
    "PROJECTS",
  ];

  return (
    <section className="home" id="home">
      <div className="home-shell">
        <h1 className="portfolio-wordmark" aria-label="Portfolio">
          PORTFOLIO
        </h1>

        <svg
          className="hero-connections"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="500" y1="470" x2="105" y2="260" />
          <line x1="500" y1="470" x2="105" y2="378" />
          <line x1="500" y1="470" x2="105" y2="496" />
          <line x1="500" y1="470" x2="895" y2="260" />
          <line x1="500" y1="470" x2="895" y2="378" />
          <line x1="500" y1="470" x2="895" y2="496" />
        </svg>

        <div className="home-intro">
          <p className="intro">HELLO, I&apos;M</p>
          <h2>
            Sampada
            <span>Kaginkar</span>
          </h2>
          <p className="home-role">
            IT Engineering Student <span>·</span> Aspiring Software Developer
          </p>
        </div>

        <div className="home-highlight">
          <p className="home-highlight-label">DRIVEN BY CURIOSITY</p>
          <p className="home-description">
            I enjoy turning ideas into working software, exploring new technologies, and building solutions that solve real problems.
          </p>
          <div className="home-buttons">
            <Link to="/#projects" className="btn primary-btn">
              Explore my work
            </Link>
            <Link to="/#contact" className="btn secondary-btn">
              Let&apos;s connect
            </Link>
            <a
              className="resume-link"
              href="/resume-tp.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="portrait-frame">
            <img src="/Profile.png" alt="Sampada Kaginkar" />
          </div>
        </div>

        <div className="hero-labels" aria-label="Areas of interest">
          {labels.map((label, index) => (
            <span className={`hero-label hero-label-${index + 1}`} key={label}>
              {label}
            </span>
          ))}
        </div>

        <div className="home-social-links" aria-label="Social profiles">
          <a
            href="https://github.com/Sampada-26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sampada-kaginkar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
