
import "./Achievements.css";
import {
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "Hackathon Finalist",
    event: "Hackathon",
    issuer: "Datta Meghe College of Engineering",
    description: "Selected among 294 teams and placed in the top 35.",
    date: "6 February 2026",
    placement: "Top 35",
    participants: "of 294 teams",
  },
  {
    id: 2,
    title: "Ideathon Finalist",
    event: "Ideathon",
    issuer: "Vasantdada Patil College of Engineering",
    description: "Selected among 258 teams and placed in the top 27.",
    date: "13 September 2025",
    placement: "Top 27",
    participants: "of 258 teams",
  },
];

function Achievements() {
  return (
    <main className="achievements-page">
      <section className="achievements-container">
        <header className="achievements-heading">
          <p className="achievements-subtitle">MILESTONES & RECOGNITION</p>
          <h1>
            Selected <span>Achievements</span>
          </h1>
          <p className="achievements-description">
            A few milestones from collaborative events where ideas, teamwork,
            and problem-solving came together.
          </p>
        </header>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <article className="achievement-card" key={achievement.id}>
              <div className="achievement-card-top">
                <span className="achievement-number">
                  {String(achievement.id).padStart(2, "0")}
                </span>
                <FaAward className="achievement-award-icon" aria-hidden="true" />
              </div>

              <span className="achievement-label">
                {achievement.event}
              </span>

              <h2>{achievement.title}</h2>

              <p className="achievement-issuer">
                <FaCertificate aria-hidden="true" />
                {achievement.issuer}
              </p>

              <p className="achievement-description">
                {achievement.description}
              </p>

              <div className="achievement-result">
                <strong>{achievement.placement}</strong>
                <span>{achievement.participants}</span>
              </div>

              <p className="achievement-date">{achievement.date}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Achievements;
