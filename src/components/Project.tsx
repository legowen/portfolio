import React from "react";

// Data
import { project_List } from "../assets/datas/project";

// Image
import project_title_icon from "../assets/img/project/project_title_icon.svg";

interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const Project = ({ scrollRef }: Props) => {
  return (
    <div
      id="PROJECT"
      ref={(element) => {
        if (element !== null) {
          scrollRef.current[2] = element;
        }
      }}
    >
      <div className="wrapper">
        <div className="project_title">
          <img src={project_title_icon} alt="project title image" />
          <h2>Projects</h2>
        </div>

        <ul className="project_list">
          {project_List.map((item, index) => (
            <li key={index} className="project">
              <div className="project_imgBox">
                <img src={item.src} alt={item.alt} />
              </div>

              <div className="project_info">
                <h3>{item.title}</h3>
                <p>
                  {item.text} <br />
                  {item.subText}
                </p>
                <div className="project_skill">
                  {item.program.map((item) => (
                    <div>{item}</div>
                  ))}
                </div>
              </div>

              <div className="project_link">
                <a href={item.siteLink} target="_blank">
                  Visit Website
                </a>
                <a href={item.codeLink} target="_blank">
                  View Code
                </a>
                {item.subcodeLink && ( 
                  <a href={item.subcodeLink} target="_blank">
                    View BE Code
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
