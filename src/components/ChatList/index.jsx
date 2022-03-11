import React from "react";
import { ChatItem } from "../ChatItem";
import "./style.scss";

export function ChatList(chatsArr) {
  chatsArr = [
    {
      chatTitle: "Chat title",
      chatOwner: "Chat owner",
      messagePreview:
        "Message preview. Lorem ipsum dolor sit amet, consectetur adipiscingelit.",
    },
    {
      chatTitle: "Chat title",
      chatOwner: "Chat owner",
      messagePreview:
        "Message preview. Lorem ipsum dolor sit amet, consectetur adipiscingelit.",
    },
    {
      chatTitle: "Chat title",
      chatOwner: "Chat owner",
      messagePreview:
        "Message preview. Lorem ipsum dolor sit amet, consectetur adipiscingelit.",
    },
  ];

  return (
    <div className="chat-list">
      <div className="container">
        {chatsArr.map((i) => (
          <ChatItem
            chatTitle={i.chatTitle}
            chatOwner={i.chatOwner}
            messagePreview={i.messagePreview}
          />
        ))}
      </div>
    </div>
  );
}
