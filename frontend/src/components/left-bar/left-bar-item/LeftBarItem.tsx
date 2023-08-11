/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import "../styles.css";

function LeftBarItem({
  content,
  iconSrc,
  onClick,
  currentChoosenItem,
}: {
  content: string;
  iconSrc: string;
  onClick: (content: string) => void;
  currentChoosenItem: string;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => onClick(content)}
      className={`left-bar-item-container ${
        content == "Log out" && "log-out-item-container"
      }  ${isHover && " is-hover-left-bar-item"} ${
        content == currentChoosenItem && " is-choosen-left-bar-item"
      }`}
    >
      <img
        src={iconSrc}
        style={{ width: "2rem", marginRight: "10px" }}
        className={` ${isHover && " is-hover-left-bar-icon"} ${
          content == currentChoosenItem && " is-choosen-left-bar-icon"
        }`}
      />
      <span
        style={{ color: "#CFD0D9", fontWeight: "700" }}
        className={`${isHover && " is-hover-left-bar-content"} ${
          content == currentChoosenItem && " is-choosen-left-bar-content"
        }`}
      >
        {content}
      </span>
    </div>
  );
}

export default LeftBarItem;
