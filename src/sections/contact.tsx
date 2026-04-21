import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact">
          <div className="contact-head">
            <h3>
              <div className="line"></div>
              <span className="name">Get In Touch</span>
            </h3>
          </div>

          <div className="contact-body">
            <p>
              Have an idea, opportunity, or just want to connect? I’m always
              open to meaningful conversations and building impactful things.
            </p>

            <a href="#" className="email-btn">
              Send me an Email
            </a>

            <div className="contact-links">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
