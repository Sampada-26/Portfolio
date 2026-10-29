
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      type: "Leadership",
      role: "Assistant Technical Head",
      organization: "CSI DBIT",
      period: "September 2025 – June 2026",
      description:
        "Supported technical workshops and helped students build practical frontend development skills.",
      responsibilities: [
        "Assisted in conducting JavaScript, Tailwind CSS, and Bootstrap workshops for first-year and 2nd year students",
        "Resolved doubts and provided hands-on support during sessions, improving student understanding.",
        "Gained practical experience in managing and delivering technical workshops effectively",
      ],
    },
  ];

  return (
    <section className="experience-page">
      <div className="experience-container">
        <p className="experience-label">MY PROFESSIONAL JOURNEY</p>

        <h1>Experience</h1>

        <p className="experience-intro">
          My experience helps me develop technical, teamwork,
          communication, and leadership skills while contributing
          to technology-focused initiatives.
        </p>

        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-header">
                <div>
                  <span className="experience-type">{item.type}</span>
                  <h2>{item.role}</h2>
                  <h3>{item.organization}</h3>
                </div>

                <span className="experience-period">
                  {item.period}
                </span>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              <h4>Key Responsibilities</h4>

              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
