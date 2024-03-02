import React from "react";

// Datas
import { complete_List } from "../assets/datas/about";

// Images
import about_title_icon from "../assets/img/about/about_title_icon.svg";
import about_user from "../assets/img/about/about_user.svg";
import about_github from "../assets/img/about/about_github.svg";
import about_location from "../assets/img/about/about_location.svg";
import about_language from "../assets/img/about/about_language.svg";
import about_email from "../assets/img/about/about_email.svg";
import about_linkedin from "../assets/img/about/about_linkedin.svg";

interface Props {
  scrollRef: React.MutableRefObject<HTMLDivElement[]>;
}

const about = [
  {
    src: about_user,
    alt: "Name Icon",
    title: "Name",
    text: "Owen Kim",
    link: ""
  },

  {
    src: about_email,
    alt: "email icon",
    title: "Email",
    text: "owen.sykim@gmail.com",
    link: ""
  },

  {
    src: about_location,
    alt: "address icon",
    title: "Located in",
    text: "Vancouver, BC, Canada",
    link: ""
  },

  {
    src: about_language,
    alt: "contact icon",
    title: "Language",
    text: "Korean / English",
    link: ""
  },

  {
    src: about_linkedin,
    alt: "computer icon",
    title: "Linkdin",
    text: "See Owen's Linkedin",
    link: "https://www.linkedin.com/in/seongyeong-owen-kim-8a06651b8/"
  },

  {
    src: about_github,
    alt: "github icon",
    title: "Github",
    text: "/legowen",
    link: "https://github.com/legowen"
  } 
]

const About = ({ scrollRef }: Props) => {

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

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
          <img src={about_title_icon} alt="About title image" />
          <h2>About</h2>
        </div>

        <div className="about_info">
          <ul>
            {about.map((item) => (
              <li key={item.title} onClick={() => item.title === "Linkdin" || item.title === "Github" ? handleLinkClick(item.link) : null}>
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
