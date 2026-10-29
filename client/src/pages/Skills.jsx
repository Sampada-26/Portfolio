import "./Skills.css";

import {
  SiCplusplus,
  SiC,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiNodedotjs,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "Java", icon: SiOpenjdk },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
];

function Skills() {
  return (
    <main className="skills-page">
      <section className="skills-container">
        <div className="skills-heading">
          <p className="skills-subtitle">WHAT I WORK WITH</p>
          <h1>
            My <span>Skills</span>
          </h1>
          <p className="skills-description">
            Technologies and tools I use to build applications and explore
            modern development and DevOps practices.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.title}>
              <h2>{category.title}</h2>

              <div className="skill-items">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div className="skill-item" key={skill.name}>
                      <Icon className="skill-icon" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;