import React from "react";

// data
import { skill_List } from "../assets/datas/skill";

// image
import skill_title_icon from "../assets/img/skill/skill_title_icon.svg";

interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const Skill = ({ scrollRef }: Props) => {
  return (
    <div
      id="SKILL"
      ref={(element) => {
        if (element !== null) {
          scrollRef.current[1] = element;
        }
      }}
    >
      <div className="wrapper">
        <div className="skill_title">
          <img src={skill_title_icon} alt="Skill Title Image" />
          <h2>Skills</h2>
        </div>

        <div className="skill_info">
          <ul>
            {skill_List.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.src} alt={item.alt} />
                </div>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;