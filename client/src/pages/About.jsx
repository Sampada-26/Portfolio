
import "./About.css";

function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-container">
        <p className="section-label">GET TO KNOW ME</p>

        <h1>About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Hello! I'm Sampada Kaginkar.</h2>

            <p>
              IT Engineering student interested in software development and the process of turning ideas into working solutions.
            </p>

            <p>
              I enjoy working with different technologies, exploring how things work behind the scenes, and building projects that challenge me to think, learn, and improve. From developing web applications to solving programming problems, I'm always looking for opportunities to put my knowledge into practice.
            </p>

            <p>
              I'm currently expanding my skills in software development, backend technologies, and problem-solving, with the goal of building reliable, useful, and well-designed software.
            </p>

            <a
              href="/resume-tp.pdf"
              className="resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              View My Resume
            </a>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <h3>Education</h3>
              <p>IT Engineering</p>
            </div>

            <div className="detail-card">
              <h3>Career Interest</h3>
              <p>Software Development</p>
            </div>

            <div className="detail-card">
              <h3>Currently Learning</h3>
              <p>AI - ML </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
