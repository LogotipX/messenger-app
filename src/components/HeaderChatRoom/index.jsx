import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import arrowLeft from "../../icons/arrow-left.svg";

export function HeaderChatRoom(props) {
  return (
    <header className="header-chat-room">
      <div className="container">
        <nav className="chat-nav">
          <li className="chat-nav__close-chat-button">
            <Link to="/chat-rooms">
              {/* <!-- &lt; --> */}
              <img src={arrowLeft} alt="" />
            </Link>
          </li>
          <li className="chat-nav__title">Chat title</li>
          <li className="chat-nav__img"></li>
        </nav>
      </div>
    </header>
  );
}
