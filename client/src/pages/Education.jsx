
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Education.css";

function Education() {
  const [expandedEducation, setExpandedEducation] = useState(0);
  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "IT Engineering",
      institution: "Don Bosco Institute of Technology ( DBIT ) ",
      period: "2023 – 2027",
      score: "CGPA: 8.5",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science -  PCM ",
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
    <section className="education-page" id="education">
      <div className="education-container">
        <p className="education-label">Education</p>

        <h1>Throughout my academic journey</h1>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <article
              className={`education-card${expandedEducation === index ? " expanded" : ""}`}
              key={item.degree}
            >
              <button
                className="education-card-toggle"
                type="button"
                aria-expanded={expandedEducation === index}
                aria-controls={`education-details-${index}`}
                onClick={() =>
                  setExpandedEducation((current) =>
                    current === index ? null : index,
                  )
                }
              >
                <span className="timeline-marker">{index + 1}</span>
                <span className="education-card-heading">
                  <span className="education-period">{item.period}</span>
                  <span className="education-degree">{item.degree}</span>
                  <span className="education-field">{item.field}</span>
                  <span className="education-score">{item.score}</span>
                </span>
                <FaChevronDown className="education-chevron" aria-hidden="true" />
              </button>

              {expandedEducation === index && (
                <div
                  className="education-card-details"
                  id={`education-details-${index}`}
                >
                  <p className="education-institution">{item.institution}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
