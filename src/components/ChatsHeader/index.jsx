import React, { useState } from "react";
import "./style.scss";

export function ChatsHeader() {
  let [search, searchUpdate] = useState("");

  const searchHandler = (e) => {
    searchUpdate(e.target.value);
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
              onInput={(e) => searchHandler(e)}
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
