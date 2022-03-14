import React from "react";
import "./style.scss";

export function ControlPanelIcon({ icon, isActive }) {
  // const activeStyle =
  // "invert(0%) sepia(100%) saturate(4882%) hue-rotate(229deg) brightness(97%) contrast(94%);";

  return (
    <li className="control-pannel__chat-list">
      <img src={icon} className={isActive ? "active" : "disable"} alt="" />
    </li>
  );
}
