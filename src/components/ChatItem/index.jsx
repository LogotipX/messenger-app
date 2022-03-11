import React from "react";
import "./style.scss";

export function ChatItem({ chatTitle, chatOwner, messagePreview }) {
  return (
    <a className="chat-item child-container" href="../chat-room/index.html">
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
    </a>
  );
}
