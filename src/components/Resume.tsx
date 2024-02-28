import React from "react";

// image
import resume_title_icon from "../assets/img/resume/resume_title_icon.svg";
import github_icon from "../assets/img/resume/github_icon.svg";
import resume_icon from "../assets/img/resume/resume_icon.svg"


interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const Resume = ({ scrollRef }: Props) => {
  return (
    <div
      id="RESUME"
      ref={(element) => {
        if (element !== null) {
          scrollRef.current[3] = element;
        }
      }}
    >
      <div className="wrapper">
        <div className="resume_title">
          <img src={resume_title_icon} alt="Resume Title Image" />
          <h2>Resume</h2>
        </div>

        <div className="resume_info">
          <a href="https://github.com/legowen" target="_blank">
            <div>
              <h3>Github</h3>
              <p>Managed the source code using a repository.</p>
            </div>
            <img src={github_icon} alt="github icon" />
          </a>
          <a href="https://resume.github.io/" target="_blank">
            <div>
              <h3>Resume</h3>
              <p>See Resume</p>
            </div>
            <img src={resume_icon} alt="resume icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;