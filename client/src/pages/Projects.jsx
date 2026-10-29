
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CrimeMapX",
    number: "01",
    description:
      "A crime data analysis and visualization project that explores crime patterns, trends, and insights through an interactive dashboard.",
    technologies: ["Python", "Streamlit", "Pandas", "Data Visualization"],
    github: "https://github.com/Sampada-26/CrimeMapX",
  },
  {
    title: "BreakSafe",
    number: "02",
    description:
      "A project focused on building a practical solution to make everyday digital experiences safer and more accessible.",
    technologies: ["Web Development", "JavaScript", "Software Development"],
    github: "https://github.com/Sampada-26/BreakSafe",
  },
  {
    title: "openQuest",
    number: "03",
    description:
      "An open-source project focused on building an engaging application and exploring collaborative software development.",
    technologies: ["Open Source", "Web Development", "Git", "GitHub"],
    github: "https://github.com/Sampada-26/openQuest",
  },
  {
    title: "Mystic Miles",
    number: "04",
    description:
      "A project exploring a digital travel experience through creative design and application development.",
    technologies: ["Web Development", "UI/UX", "JavaScript"],
    github: "https://github.com/Sampada-26/Mystic_miles",
  },
];

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-container">
        <div className="projects-heading">
          <p className="projects-subtitle">MY WORK</p>
          <h1>
            Featured <span>Projects</span>
          </h1>
          <p className="projects-description">
            A collection of projects where I explore ideas, solve problems,
            and continuously develop my technical skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <FaGithub className="project-github-icon" />
              </div>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="project-tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub />
                  <span>View Repository</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
