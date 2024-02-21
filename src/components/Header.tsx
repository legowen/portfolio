import React from "react";

// Data
import { navigation_List } from "../assets/datas/header";

// Image
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
            <img src={logo_icon} alt="logo icon" />
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
              <img src={fullMenu_icon} alt="menu icon"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;