import { useState } from "react";
import FriendSearch from "../../assets/icons/FriendSearch.svg";
import RightBarUser from "./right-bar-user/RightBarUser";
import "./styles.css";
function Rightbar() {
  const fakeUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="side-bar-container">
      <div>
        <img
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="side-bar-friend-search"
          src={FriendSearch}
          alt=""
          style={{ width: "5rem", marginBottom: "30px" }}
        />
        {isHover && (
          <div className="side-bar-search-friend-text">Search Friends</div>
        )}
      </div>

      <div className="side-bar-all-user-container">
        {fakeUser.map((user) => {
          return <RightBarUser />;
        })}
      </div>
    </div>
  );
}

export default Rightbar;
