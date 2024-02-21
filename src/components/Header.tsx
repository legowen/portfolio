import React from "react";

// 데이터
import { navigation_List } from "../assets/datas/header";

// 이미지
import logo_icon from "../assets/img/header/logo_icon.svg";
import fullMenu_icon from "../assets/img/header/fullMenu_icon.svg";

interface Props {
  setFullMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setFullMenuState }: Props) => {
  return (
    <div id="Header">
      <div className="wrapper">
        <div className="header_info">
          <a href="#HOME" className="logo">
            <img src={logo_icon} alt="로고 아이콘" />
          </a>

          <div className="header_navigation">
            <ul>
              {navigation_List.map((item, index) => (
                <li key={index}>
                  <a href={"#" + item}>{item}</a>
                </li>
              ))}
            </ul>

            <button onClick={() => setFullMenuState(true)}>
              <img src={fullMenu_icon} alt="전체메뉴 아이콘"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;