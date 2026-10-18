
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <p className="section-label">GET TO KNOW ME</p>

        <h1>About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Hello! I'm Sampada Kaginkar.</h2>

            <p>
              I am a Computer Engineering student passionate about
              software development, web technologies, and problem-solving.
              I enjoy exploring new technologies and building projects
              that help me develop practical skills.
            </p>

            <p>
              My interests include full-stack development, programming,
              database management, and creating user-friendly web
              applications. I am continuously learning and improving
              my technical knowledge.
            </p>

            <p>
              My goal is to become a skilled software developer and
              contribute to meaningful technology projects.
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
              <p>Computer Engineering</p>
            </div>

            <div className="detail-card">
              <h3>Career Interest</h3>
              <p>Software Development</p>
            </div>

            <div className="detail-card">
              <h3>Currently Learning</h3>
              <p>MERN Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
