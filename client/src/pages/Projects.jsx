
import { useState } from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CrimeMapX",
    number: "01",
    category: "Data & Analytics",
    description:
      "A crime data analysis and visualization project that explores crime patterns, trends, and insights through an interactive BI and streamlit dashboard.",
    technologies: ["Python", "Streamlit", "Pandas", "Data Visualization","Jupyter Notebook"],
    github: "https://github.com/Sampada-26/CrimeMapX",
  },
  {
    title: "BreakSafe",
    number: "02",
    category: "DevOps & Cloud",
    description:
      "adaptive cloud resilience and chaos engineering platform that safely simulates failures like server crashes, network issues, and database outages. It monitors system behavior, identifies weaknesses, explains failures, and recommends improvements to strengthen application resilience.",
    technologies: ["Devops", "Fast Api", "React"],
    github: "https://github.com/Sampada-26/BreakSafe",
  },
  {
    title: "OpenQuest",
    number: "03",
    category: "Open Source",
    description:
      "OpenQuest helps developers find open-source issues that fit their skills, interests, and experience. Instead of searching through an endless issue tracker, contributors can discover approachable work, understand why an issue may suit them, and save opportunities for later.",
    technologies: ["Open Source", "Web Development", "Django", "GitHub"],
    github: "https://github.com/Sampada-26/OpenQuest",
  },
  {
    title: "GreenSetu",
    number: "04",
    category: "Data & Analytics",
    description:
      "web-based environmental monitoring system designed to analyze mangrove degradation in the Mumbai Metropolitan region using GIS and satellite data.",
    technologies: ["Jupyter Notebook", "Python", "JavaScript"],
    github: "https://github.com/vimla01/GreenSetu",
  },
  {
    title: "Mystic Miles",
    number: "05",
    category: "Web Apps",
    description:
      "A project exploring a digital travel experience through creative design and application development.",
    technologies: ["Web Development", "UI/UX", "JavaScript"],
    github: "https://github.com/Sampada-26/Mystic_miles",
  },
];

const projectCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProject, setExpandedProject] = useState(null);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      !normalizedQuery ||
      [project.title, project.description, project.category, ...project.technologies]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="projects-page" id="projects">
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

        <div className="projects-controls">
          <label className="project-search">
            <span>Search projects</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Try React, Python, or cloud"
            />
          </label>

          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => (
              <button
                className={`project-filter${activeCategory === category ? " active" : ""}`}
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="project-results" role="status" aria-live="polite">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className={`project-card${expandedProject === project.title ? " is-expanded" : ""}`}
                key={project.title}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h2>{project.title}</h2>

                <p
                  className="project-description"
                  id={`project-description-${project.number}`}
                >
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  className="project-details-toggle"
                  type="button"
                  aria-expanded={expandedProject === project.title}
                  aria-controls={`project-description-${project.number}`}
                  onClick={() =>
                    setExpandedProject((current) =>
                      current === project.title ? null : project.title,
                    )
                  }
                >
                  {expandedProject === project.title
                    ? "Show less"
                    : "Read project details"}
                  <span aria-hidden="true">
                    {expandedProject === project.title ? "−" : "+"}
                  </span>
                </button>

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
        ) : (
          <p className="projects-empty">
            No projects match your search. Try another keyword or category.
          </p>
        )}
      </section>
    </section>
  );
}

export default Projects;
