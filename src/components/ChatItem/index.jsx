import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export function ChatItem({ chatTitle, chatOwner, messagePreview }) {
  const key = `${chatTitle.replace(/\s/g, "-")}_${chatOwner.replace(
    /\s/g,
    "-"
  )}_${Math.random().toFixed(8) * 100000000}`;

  return (
    <Link to="/chat-room" key={key} className="chat-item child-container">
      <div className="chat-item__header">
        <div className="chat-item__image"></div>
        <div className="chat-item__info">
          <div className="chat-item__title">{chatTitle}</div>
          <div className="chat-item__owner">{chatOwner}</div>
          <div className="chat-item__message-preview">{messagePreview}</div>
        </div>
      </div>
      {/* <!-- <div className="chat-item__manage">
              <div className="chat-item__members-preview"></div>
              <div className="chat-item__join-button"></div>
            </div> --> */}
    </Link>
  );
}
