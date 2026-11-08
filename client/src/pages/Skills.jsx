import { useState } from "react";
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
      { name: "C++", icon: SiCplusplus, color: "#659ad2" },
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "Java", icon: SiOpenjdk, color: "#ed8b00" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#a98bff" },
      { name: "Vite", icon: SiVite, color: "#a58bff" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29" },
      { name: "Django", icon: SiDjango, color: "#44b78b" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#5f9ec4" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#6995e6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#f0f0f0" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#6d9cff" },
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState("React");
  const categories = ["All", ...skillCategories.map(({ title }) => title)];
  const visibleCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter(({ title }) => title === activeCategory);
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category !== "All") {
      const firstSkill = skillCategories.find(
        (skillCategory) => skillCategory.title === category,
      ).skills[0];
      setSelectedSkill(firstSkill.name);
    }
  };

  return (
    <section className="skills-page" id="skills">
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

        <div
          className="skill-category-filters"
          role="group"
          aria-label="Filter skills by category"
        >
          {categories.map((category) => (
            <button
              className={`skill-category-filter${activeCategory === category ? " active" : ""}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleCategories.map((category) => (
            <article className="skill-card" key={category.title}>
              <h2>{category.title}</h2>

              <div className="skill-items">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <button
                      className={`skill-item${selectedSkill === skill.name ? " selected" : ""}`}
                      key={skill.name}
                      type="button"
                      aria-pressed={selectedSkill === skill.name}
                      onClick={() => setSelectedSkill(skill.name)}
                    >
                      <Icon
                        className="skill-icon"
                        aria-hidden="true"
                        style={{ color: skill.color }}
                      />
                      <span>{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

      </section>
    </section>
  );
}

export default Skills;