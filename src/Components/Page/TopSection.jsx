import React from "react";
import Ajmal from "../Image/ajmal.jpg";
import "../Css/TopSection.css";
import { Link } from "react-router-dom";

const Top_Section = () => {
  return (
    <>
      <section>
        <div className="bg_set"></div>
        <div className="top_container">
          <div className="top_row">
            <div className="top_col">
              <div className="top_left_row">
                <div className="top_left_col">
                  <img src={Ajmal} alt="MOHMMAD AZMAL ALI" />
                </div>
                <div className="top_left_col">
                  <h1>MOHMMAD AZMAL ALI</h1>
                  <p>I am a front end developer</p>
                  <div className="top_icon">
                    <a href="https://github.com/AjmalAli747" target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-azmal-ali-7069081ab/" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://codepen.io/your-work/" target="_blank" rel="noreferrer">
                      <i className="fab fa-codepen"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="top_col">
              <div className="top_right_row">
                <div className="top_right_col">
                  <div className="social_icon_box">
                    <p>Email</p>
                    <h1>
                      <a href="mailto:mdajmalali747@gmail.com" className="text_Info" target="_blank" rel="noreferrer"> 
                        mdajmalali747@gmail.com
                      </a>
                    </h1>
                  </div>
                  <div className="social_icon_box">
                    <p>phone</p>
                    <h1>
                      <a href="tel: 9015914116" className="text_Info" rel="noreferrer">
                        9015914116
                      </a>
                    </h1>
                  </div>
                </div>

                <div className="top_right_col">
                  <div className="social_icon_box">
                    <p>birthday</p>
                    <h1>
                      <Link to="#">10 - 02 - 1999</Link>
                    </h1>
                  </div>
                  <div className="social_icon_box">
                    <p>location</p>
                    <h1>
                      <Link to="#">Delhi, India</Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top_Section;
