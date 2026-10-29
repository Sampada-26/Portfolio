
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaDiscord,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./Contact.css";

const CONTACT_EMAIL = "sampadak2603@gmail.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-container">
        <header className="contact-heading">
          <p className="contact-subtitle">GET IN TOUCH</p>
          <h1>
            Let's <span>Connect</span>
          </h1>
          <p>
            Have a project idea, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </header>

        <div className="contact-layout">
          <section className="contact-info">
            <h2>Let's talk!</h2>
            <p className="contact-info-description">
              I'm always interested in connecting with developers,
              collaborating on projects, and exploring new opportunities.
            </p>

            <a
              className="contact-info-item"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <span className="contact-info-icon">
                <FaEnvelope />
              </span>
              <span>
                <small>Email me</small>
                <strong>{CONTACT_EMAIL}</strong>
              </span>
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <FaMapMarkerAlt />
              </span>
              <span>
                <small>Location</small>
                <strong>India</strong>
              </span>
            </div>

            <div className="contact-socials">
              <h3>Find me online</h3>

              <a
                href="https://github.com/Sampada-26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href=" https://discord.gg/3qN4bKuC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                title="Discord"
              >
                <FaDiscord />
              </a>
            </div>
          </section>

          <section className="contact-form-card">
            <h2>Send me a message</h2>
            <p className="contact-form-description">
              Fill out the form below and let's start a conversation.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Send Message</span>
                <FaPaperPlane />
              </button>

              {submitted && (
                <p className="contact-success" role="status">
                  <FaCheckCircle />
                  Your email app should open with your message ready to send.
                </p>
              )}
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact;
