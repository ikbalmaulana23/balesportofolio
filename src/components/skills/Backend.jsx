import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-php skill__icon2"></i>
            <div>
              <h3 className="skills__name"> PHP </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-php skill__icon2"></i>
            <div>
              <h3 className="skills__name"> Laravel </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-hot skill__icon2"></i>
            <div>
              <h3 className="skills__name"> Codeigniter</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-data skill__icon2"></i>
            <div>
              <h3 className="skills__name"> MySQl</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-javascript skill__icon2"></i>
            <div>
              <h3 className="skills__name"> Express JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-nodejs skill__icon2"></i>
            <div>
              <h3 className="skills__name"> Node JS </h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-firebase skill__icon2"></i>
            <div>
              <h3 className="skills__name"> Firebase </h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-mongodb skill__icon2"></i>
            <div>
              <h3 className="skills__name"> Mongo DB </h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
