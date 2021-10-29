import React, {useEffect} from "react";
import "../Css/About.css";
import Pdf from "../Image/resume.pdf";

const About = () => {

  useEffect(() => {
    document.title = "About Us";
  })


  return (
    <>
      <section>
        <div className="about_container">
          <div className="about_row">
            <div className="about_col">
              <h1>About Me</h1>
              <p>
                I'm a Front End developer, I'm lives in Delhi, India. I make a
                WebSite, usually with Html, Css, Bootstrap, Javascript, React
                js. Feel free to take a look at my latest Projects. Content me
                at:
              </p>
              <button>
                <a download href={Pdf}>DOWNLOAD MY CV</a>
              </button>
            </div>
          </div>

          <h2 className="text_center">What I am Doing</h2>

          <div className="about_content_row">
            <div className="about_content_col">
              <i className="far fa-edit"></i>
              <h1>Front End Developer</h1>
              <p>
                Using HTML, Css, Bootstrap, React js and Javascript to bring
                concepts to life. Developing and maintaining the user interface.
                Implementing design on mobile websites
              </p>
            </div>
            <div className="about_content_col">
              <i className="fas fa-laptop-code"></i>
              <h1>Responsive Design</h1>

              <p>
                Responsive Design Using HTML, Css, Bootstrap, React js and
                Javascript to bring concepts to life. Implementing design on
                mobile websites
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
