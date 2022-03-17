import React, { useState } from "react";
import { ChatList } from "../../components/ChatList";
import { ChatsHeader } from "../../components/ChatsHeader";
import { ControlPanel } from "../../components/ControlPanel";

export function Chats() {
  const chatListFromSomeWhere = [
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
    {
      chatTitle: "Chat title",
      chatOwner: "Chat owner",
      messagePreview:
        "Message preview. Lorem ipsum dolor sit amet, consectetur adipiscingelit.",
    },
  ];

  let [search, setSearch] = useState("");
  function searchHandler(search) {
    setSearch(search);
  }

  return (
    <div className="page-chat-list has-control-panel">
      <ChatsHeader searchHandler={searchHandler} />
      <ChatList chatsArr={chatListFromSomeWhere} filter={search} />
      <ControlPanel />
    </div>
  );
}
