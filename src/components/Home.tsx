import React from "react";
import { useState, useEffect } from "react";

// Data
import { home_Text } from "../assets/datas/home";

// Image
import mouse_icon from "../assets/img/home/mouse_icon.svg";

const Home = () => {
  // Current Scroll Y Value w useState
  const [position, setPosition] = useState<number>(0);

  // Text Typing useState
  const [text, setText] = useState<string>("");
  const [textCount, setTextCount] = useState<number>(0);

  function onScroll(): void {
    setPosition(window.scrollY);
  }

  const text_Typing = (): NodeJS.Timer => {
    return setInterval(() => {
      setText(text + home_Text[textCount]);
      setTextCount(textCount + 1);
    }, 200);
  };

  // UseEffect for Current Scroll Y Value
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Text Typing useEffect
  useEffect(() => {
    const text_Interval = text_Typing();

    if (textCount > home_Text.length) {
      setText("");
      setTextCount(0);
    }

    return () => {
      clearInterval(text_Interval);
    };
  }, [text]);

  return (
    <div id="HOME" style={{ backgroundPositionY: position / 2 }}>
      <div className="home_info">
        <h1>WEB PORTFOLIO</h1>
        <p>{text}</p>
      </div>

      <a href="#ABOUT">
        <img src={mouse_icon} alt="Mouse Icon" />
      </a>
    </div>
  );
};

export default Home;