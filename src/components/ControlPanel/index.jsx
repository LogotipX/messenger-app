import React from "react";
import "./style.scss";

import chatSvg from "../../icons/chat.svg";
import searchSvg from "../../icons/search.svg";
import notificationSvg from "../../icons/notification.svg";
import profileSvg from "../../icons/profile.svg";

export function ControlPanel() {
  return (
    <nav className="control-panel">
      <li className="control-pannel__chat-list">
        <img src={chatSvg} alt="" />
      </li>
      <li className="control-pannel__search-chats-button">
        <img src={searchSvg} alt="" />
      </li>
      <li className="control-pannel__notification">
        <img src={notificationSvg} alt="" />
      </li>
      <li className="control-pannel__profile-manager">
        <img src={profileSvg} alt="" />
      </li>
    </nav>
  );
}
