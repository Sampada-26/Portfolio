
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Engineering",
      institution: "Don Bosco Institute of Technology ( DBIT ) ",
      period: "2023 – 2027",
      score: "CGPA: 8.5",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      institution: "Adarsh Vidya Mandir Junior College ",
      period: "2021 – 2023",
      score: "Percentage: 89%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "School Education",
      institution: "Adarsh Vidya Mandir",
      period: "2020 – 2021",
      score: "Percentage: 96%",
    },
  ];

  return (
    <section className="education-page">
      <div className="education-container">
        <p className="education-label">MY ACADEMIC JOURNEY</p>

        <h1>Education</h1>

        <p className="education-intro">
          My educational journey has helped me build a strong foundation
          in technology, logical thinking, and problem-solving.
        </p>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <article className="education-card" key={item.degree}>
              <div className="timeline-marker">{index + 1}</div>

              <div className="education-card-content">
                <span className="education-period">{item.period}</span>

                <h2>{item.degree}</h2>

                <h3>{item.field}</h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-description">
                  {item.description}
                </p>

                <span className="education-score">{item.score}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
