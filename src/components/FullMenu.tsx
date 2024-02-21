import React from "react";

// Data
import { navigation_List } from "../assets/datas/header";

// Image
import close_icon from "../assets/img/fullmenu/close_icon.svg";

interface Props {
  fullMenustate: boolean;
  setFullMenuState: React.Dispatch<React.SetStateAction<boolean>>
}

const FullMenu = (props: Props) => {
  return (
    <div id="FullMenu" className={props.fullMenustate === true ? "on" : ""}>
      <ul>
        {navigation_List.map((item, index) => (
          <li key={index} onClick={() => props.setFullMenuState(false)}>
            <a href={"#" + item}>{item}</a>
          </li>
        ))}
      </ul>
      <img className="close" onClick={() => props.setFullMenuState(false)} src={close_icon} alt="closed icon" />
    </div>
  );
};

export default FullMenu;