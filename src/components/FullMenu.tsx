import React from "react";

// 데이타
import { navigation_List } from "../assets/datas/header";

// 이미지
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
      <img className="close" onClick={() => props.setFullMenuState(false)} src={close_icon} alt="닫기 아이콘" />
    </div>
  );
};

export default FullMenu;