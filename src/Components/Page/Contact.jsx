import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import "../Css/Contact.css";
import Img from "../Image/bgSet.jpg";
import SoundUrl from "../Image/mouseEffect.mp3";

const Contact = () => {
  const formSubmit = useRef();

  useEffect(() => {
    document.title = "Contacts";
  });

  const submitForm = (e) => {
    e.preventDefault();

    const userName = document.getElementById("name").value;
    const number = document.getElementById("Number").value;
    const email = document.getElementById("Email").value;
    const subject = document.getElementById("Subject").value;
    const message = document.getElementById("message").value;

    const input = document.querySelectorAll(".inputElemnt");
    const icon_i = document.querySelectorAll("form i");

    if (userName === "") {
      input[0].classList.add("style_Border");
      icon_i[0].classList.add("style_Color");
    } else if (number === "") {
      input[1].classList.add("style_Border");
      icon_i[1].classList.add("style_Color");
    } else if (email === "") {
      input[2].classList.add("style_Border");
      icon_i[2].classList.add("style_Color");
    } else if (subject === "") {
      input[3].classList.add("style_Border");
      icon_i[3].classList.add("style_Color");
    } else if (message === "") {
      input[4].classList.add("style_Border");
      icon_i[4].classList.add("style_Color");
    } else {
      emailjs
        .sendForm(
          "service_kbjfaz6",
          "template_5zkms12",
          formSubmit.current,
          "user_mMHDkR6bbd4crGiAIbpRm"
        )
        .then(
          (result) => {
            swal(
              "Congratulations!",
              `${result.text} ${userName} Your Form is Submitted Successfully`,
              "success"
            );
          },
          (error) => {
            swal("Sorry Try agin", `${error.text}`, "error");
          }
        );

      input.forEach((element) => {
        element.value = "";
        element.classList.remove("style_Border");
      });

      icon_i.forEach((element_icon) => {
        element_icon.value = "";
        element_icon.classList.remove("style_Color");
      });
    }
  };

  // sound input function
  const keyUpFunction = (e) => {
    new Audio(SoundUrl).play();
  };

  return (
    <div>
      <section>
        <div className="contact">
          <div className="contact_row">
            <div className="content_col first_Content">
              <div className="content_info">
                <img src={Img} alt={Img} />
                <h1>MOHHMAD AZMAL ALI</h1>
                <p className="bioData_text">
                  HI, My Name is MOHMMAD AZMAL ALI I'm a Front End Developer
                </p>
                <div className="content_details">
                  <p className="text_info">
                    Phone :
                    <span>
                      <a
                        href="tel: 9015914116"
                        className="text_Info"
                        rel="noreferrer"
                      >
                        9015914116
                      </a>
                    </span>
                  </p>
                  <p className="text_info">
                    Email :
                    <span>
                      <a
                        href="mailto:mdajmalali747@gmail.com"
                        className="text_Info"
                        target="_blank"
                        rel="noreferrer"
                      >
                        mdajmalali747@gmail.com
                      </a>
                    </span>
                  </p>
                </div>
                <div className="top_icon">
                  <a
                    href="https://github.com/AjmalAli747"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammad-azmal-ali-7069081ab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://codepen.io/your-work/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-codepen"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="content_col form_input">
              <form ref={formSubmit} onSubmit={submitForm}>
                <div className="icon_input">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    name="useName"
                    className="inputElemnt"
                    onKeyUp={keyUpFunction}
                  />
                  <i className="far fa-user"></i>
                </div>
                <div className="icon_input">
                  <label htmlFor="Number">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    id="Number"
                    name="number"
                    className="inputElemnt"
                    onKeyUp={keyUpFunction}
                  />
                  <i className="fas fa-phone"></i>
                </div>
                <div className="icon_input">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    id="Email"
                    name="email"
                    className="inputElemnt"
                    onKeyUp={keyUpFunction}
                  />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="icon_input">
                  <label htmlFor="Subject">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter Your Subject"
                    id="Subject"
                    name="subject"
                    className="inputElemnt"
                    onKeyUp={keyUpFunction}
                  />
                  <i className="fas fa-book"></i>
                </div>
                <div className="icon_input">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter Your Message"
                    name="message"
                    className="inputElemnt"
                    onKeyUp={keyUpFunction}
                  ></textarea>
                  <i className="far fa-comment-dots"></i>
                </div>
                <div className="icon_input submitIcon">
                  <input type="submit" value="Submit" />
                  <i className="fas fa-paper-plane"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
