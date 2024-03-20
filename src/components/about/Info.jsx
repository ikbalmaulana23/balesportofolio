import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Years Working</span>
      </div>
      <div className="about__box">
        <i class="bx bx-message-square-check about__icon"></i>
        <h3 className="about__title">Completed Project</h3>
        <span className="about__subtitle">14+ Projects </span>
      </div>
      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online On Working Time</span>
      </div>
    </div>
  );
};

export default Info;
