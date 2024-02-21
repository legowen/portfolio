import React from "react";

// Datas
import { complete_List } from "../assets/datas/about";

// Images
import about_title_icon from "../assets/img/about/about_title_icon.svg";
import about_user from "../assets/img/about/about_user.svg";
import about_calendar from "../assets/img/about/about_calendar.svg";
import about_location from "../assets/img/about/about_location.svg";
import about_phone from "../assets/img/about/about_phone.svg";
import about_email from "../assets/img/about/about_email.svg";
import about_computer from "../assets/img/about/about_computer.svg";

interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const about = [
  {
    src: about_user,
    alt: "Name Icon",
    title: "Name",
    text: "Owen Kim"
  },
  {
    src: about_calendar,
    alt: "birth icon",
    title: "Date of birth",
    text: "1993.04.26"
  }, // Education
  {
    src: about_location,
    alt: "address icon",
    title: "Located in",
    text: "Vancouver, BC, Canada"
  },
  {
    src: about_phone,
    alt: "contact icon",
    title: "contact",
    text: "7788823579"
  },
  {
    src: about_email,
    alt: "email icon",
    title: "Email",
    text: "owen.sykim@gmail.com"
  },
  {
    src: about_computer,
    alt: "computer icon",
    title: "Operating System",
    text: "MacOS"
  }
]

const About = ({ scrollRef }: Props) => {
  return (
    <div
      id="ABOUT"
      ref={(element) => {
        if (element !== null) {
          scrollRef.current[0] = element;
        }
      }}
    >
      <div className="wrapper">
        <div className="about_title">
          <img src={about_title_icon} alt="About 타이틀 이미지" />
          <h2>About</h2>
        </div>

        <div className="about_info">
          <ul>
            {about.map((item) => (
              <li>
                <img src={item.src} alt={item.alt}/>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;