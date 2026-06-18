import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>
          INDIA'S ULTIMATE
          <br />
          ROBOTICS ARENA
        </h1>

        <p>
          Build.Compete.Rank.The National
          <br />
          Ecosystem for Robotics Arena
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            CREATE ACCOUNT
          </button>

          <button className="secondary-btn">
            EXPLORE EVENTS
          </button>

        </div>

      </div>

      <div className="hero__live-card">
        <span className="hero__live-dot"></span>
        <span className="hero__live-text">
          LIVE :
        </span>
        Episode 14 . Bengaluru Regionals
        <button>
          WATCH LIVE
        </button>
      </div>

    </section>
  );
};

export default Hero;