import "./footpage.css";

import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor4.png";
import sponsor5 from "../../assets/images/sponsor5.png";
import sponsor6 from "../../assets/images/sponsor6.png";


function JoinEcosystem() {

  return (
    <div className="je-wrap">

      <h2 className="je-title">Join The Ecosystem</h2>

      <div className="je-cards">

        <div className="je-card">
          <p className="je-card-title">Become In Judge</p>
          <input className="je-input" type="text" placeholder="Name" />
          <input className="je-input" type="text" placeholder="Location" />
          <input className="je-input" type="text" placeholder="Enroll" />
          <button className="je-btn">Sign Up</button>
        </div>

        <div className="je-card">
          <p className="je-card-title">Volunteer</p>
          <input className="je-input" type="text" placeholder="Name" />
          <input className="je-input" type="text" placeholder="Location" />
          <input className="je-input" type="text" placeholder="Enroll" />
          <button className="je-btn">Sign Up</button>
        </div>

        <div className="je-card">
          <p className="je-card-title">Community Member</p>
          <input className="je-input" type="text" placeholder="Name" />
          <input className="je-input" type="text" placeholder="Location" />
          <input className="je-input" type="text" placeholder="Enroll" />
          <button className="je-btn">Sign Up</button>
        </div>

      </div>

      <hr className="je-divider" />

      <p className="je-sponsors-title">Sponsors</p>

      <div className="je-sponsors-row">
        <div className="je-sponsor">
          <img src={sponsor1} alt="NIT Delhi" />
          <span className="je-sponsor-name">NIT Delhi</span>
        </div>
        <div className="je-sponsor">
          <img src={sponsor2} alt="Indian Bit" />
          <span className="je-sponsor-name">Indian Bit</span>
        </div>
        <div className="je-sponsor">
          <img src={sponsor3} alt="NIT Silchar" />
          <span className="je-sponsor-name">NIT Silchar</span>
        </div>
      </div>

      <div className="je-sponsors-row">
        <div className="je-sponsor">
          <img src={sponsor4} alt="Robo Company" />
          <span className="je-sponsor-name">Robo<br />Company</span>
        </div>
        <div className="je-sponsor">
          <img src={sponsor5} alt="IIT Bombay" />
          <span className="je-sponsor-name">IIT Bombay</span>
        </div>
        <div className="je-sponsor">
          <img src={sponsor6} alt="General Robotics" />
          <span className="je-sponsor-name">General Robotics</span>
        </div>
      
      </div>

      <hr className="je-footer-divider" />

      <div className="je-footer">

        <div className="je-quick-links">
          <p className="je-quick-links-title">Quick Links</p>
          <div className="je-links-grid">
            <a className="je-link" href="#">The Arena</a>
            <a className="je-link" href="#">Join the Team</a>
            <a className="je-link" href="#">Episodes</a>
            <a className="je-link" href="#">Sponsorships</a>
            <a className="je-link" href="#">National Rankings</a>
            <a className="je-link" href="#">Help Center</a>
            <a className="je-link" href="#">Programs</a>
            <a className="je-link" href="#">Contact Us</a>
            <a className="je-link" href="#">Rulebooks</a>
            <a className="je-link" href="#">Legal</a>
          </div>
        </div>

        <div className="je-social">
          <p className="je-social-title">Social Media</p>
          <div className="je-social-icons">

            <div className="je-social-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1C4.6 3 3.3 3 2.2 4.2 1.3 5 1 7 1 7S.7 9.3.7 11.5v2.1c0 2.2.3 4.4.3 4.4s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 22.2 12 22.2 12 22.2s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.2.3-4.4v-2.1C23.3 9.3 23 7 23 7zm-13.7 8.9V8.1l8.1 3.9-8.1 3.9z" />
              </svg>
            </div>

            <div className="je-social-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </div>

            <div className="je-social-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.8V24C19.6 23 24 18.1 24 12.1z" />
              </svg>
            </div>

            <div className="je-social-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9 1.2h3.7L14.8 10 24 22.8h-7.6l-5.3-6.9-6 6.9H1.3l8.3-9.5L0 1.2h7.8l4.8 6.3 5.3-6.3zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" />
              </svg>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default JoinEcosystem;