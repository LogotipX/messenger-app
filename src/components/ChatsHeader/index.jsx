import React, { useState } from "react";
import "./style.scss";

export function ChatsHeader({ searchHandler }) {
  let [search, searchUpdate] = useState("");

  const inputHandler = (e) => {
    searchUpdate(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <header className="header-chat-list">
      <div className="container">
        <div className="header__inner">
          <span className="header__title">
            Chats
            <span className="header__redact-icon">
              <img src="/src/icons/redact-icon-minimize.svg" alt="" />
            </span>
          </span>
          <div className="header__search">
            <input
              onInput={(e) => inputHandler(e)}
              value={search}
              type="search"
              placeholder="Search by chats"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
