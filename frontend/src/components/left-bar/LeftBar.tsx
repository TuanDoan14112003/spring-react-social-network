/* eslint-disable @typescript-eslint/no-unsafe-argument */
import "./styles.css";
import Home from "../../assets/icons/Home.svg";
import Explore from "../../assets/icons/Explore.svg";
import Message from "../../assets/icons/Message.svg";
import Notification from "../../assets/icons/Notification.svg";
import Community from "../../assets/icons/Communities.svg";
import MoviePlan from "../../assets/icons/Movie-plan.svg";
import Profile from "../../assets/icons/Profile.svg";
import BookMark from "../../assets/icons/Book-mark.svg";
import Logout from "../../assets/icons/Log-out.svg";
import LeftBarItem from "./left-bar-item/LeftBarItem";
import { useState } from "react";

function LeftBar() {
  const [currentChoosenItem, setCurrentChoosenItem] = useState("Home");
  const onClick = (content: string) => {
    setCurrentChoosenItem(content);
  };
  return (
    <div style={{ marginTop: "15vh" }}>
      <div className="left-bar-container">
        <LeftBarItem
          content="Home"
          iconSrc={Home}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Explore"
          iconSrc={Explore}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Messages"
          iconSrc={Message}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Notifications"
          iconSrc={Notification}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Communities"
          iconSrc={Community}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Moive Plan"
          iconSrc={MoviePlan}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Profile"
          iconSrc={Profile}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
        <LeftBarItem
          content="Bookmarks"
          iconSrc={BookMark}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
      </div>
      <div className="left-bar-log-out">
        <LeftBarItem
          content="Log out"
          iconSrc={Logout}
          onClick={onClick}
          currentChoosenItem={currentChoosenItem}
        />
      </div>
    </div>
  );
}

export default LeftBar;
