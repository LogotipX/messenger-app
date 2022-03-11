import React from "react";
import { ChatItem } from "../ChatItem";
import "./style.scss";

export function ChatList({ chatsArr = [], filter = "" }) {
  return (
    <div className="chat-list">
      <div className="container">
        {chatsArr.length > 0 ? (
          chatsArr.map((i) =>
            i.chatTitle.toLowerCase().includes(filter.toLowerCase()) ? (
              <ChatItem
                chatTitle={i.chatTitle}
                chatOwner={i.chatOwner}
                messagePreview={i.messagePreview}
                key={`${i.chatTitle}_${i.chatOwner}`}
              />
            ) : (
              false
            )
          )
        ) : (
          //null
          <i>No chats found</i>
        )}
      </div>
    </div>
  );
}
