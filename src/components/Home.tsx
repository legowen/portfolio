import React from "react";
import { useState, useEffect } from "react";

// 데이터
import { home_Text } from "../assets/datas/home";

// 이미지
import mouse_icon from "../assets/img/home/mouse_icon.svg";

const Home = () => {
  // 현재 스크롤 Y값 useState
  const [position, setPosition] = useState<number>(0);

  // 텍스트 타이핑 useState
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

  // 현재 스크롤 Y값 useEffect
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 텍스트 타이핑 useEffect
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
        <img src={mouse_icon} alt="마우스 아이콘" />
      </a>
    </div>
  );
};

export default Home;