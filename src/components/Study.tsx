import React from "react";

// 이미지
import study_title_icon from "../assets/img/study/study_title_icon.svg";
import github_icon from "../assets/img/study/github_icon.svg";


interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const Study = ({ scrollRef }: Props) => {
  return (
    <div
      id="STUDY"
      ref={(element) => {
        if (element !== null) {
          scrollRef.current[3] = element;
        }
      }}
    >
      <div className="wrapper">
        <div className="study_title">
          <img src={study_title_icon} alt="Study Title Image" />
          <h2>Study</h2>
        </div>

        <div className="study_info">
          <a href="https://github.com/legowen" target="_blank">
            <div>
              <h3>Github</h3>
              <p>Managing the source code using a repository.</p>
            </div>
            <img src={github_icon} alt="Github Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Study;