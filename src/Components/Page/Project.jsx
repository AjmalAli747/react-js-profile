import React, {useEffect} from "react";
import "../Css/Project.css";
import ArrayOfObject from "../Page/ArrayOfObject";
import { Clone_Project, React_Clone } from "../Page/ArrayOfObject";

const Project = () => {
    
  useEffect(() => {
    document.title = "Projects";
  })

  return (
    <div>
      <section>
      <div className="project_section">
        <div className="project_container">
          <h1 className="title">Front End Website</h1>
          <div className="project_row">
            {ArrayOfObject.map((element, index) => {
              return (
                <div key={index}>
                  <div className="project_col">
                    <img src={element.img} alt={element.img} />
                    <div className="content_project">
                      <h1>{element.title}</h1>
                      <p>{element.p}</p>
                      <button>
                        <a href={element.link} target="_blank" rel="noreferrer">View Demo</a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="project_container">
          <h1 className="title">Front End Clone</h1>
          <div className="project_row">
            {Clone_Project.map((clone, index_Key) => {
              return (
                <div key={index_Key}>
                  <div className="project_col">
                    <img src={clone.img} alt={clone.img} />
                    <div className="content_project">
                      <h1>{clone.title}</h1>
                      <p>{clone.p}</p>
                      <button>
                        <a href={clone.link_Clone} target="_blank" rel="noreferrer">View Demo</a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="project_container">
          <h1 className="title">React js</h1>
          <div className="project_row">
            {React_Clone.map((clone, index_React) => {
              return (
                <div key={index_React}>
                  <div className="project_col">
                    <img src={clone.img} alt={clone.img} />
                    <div className="content_project">
                      <h1>{clone.title}</h1>
                      <p>{clone.p}</p>
                      <button>
                        <a href={clone.Link_React} target="_blank" rel="noreferrer">View Demo</a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
