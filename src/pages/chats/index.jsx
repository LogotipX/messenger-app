import React from "react";
import { ChatList } from "../../components/ChatList";
import { ChatsHeader } from "../../components/ChatsHeader";
import { ControlPanel } from "../../components/ControlPanel";

export function Chats() {
  return (
    <>
      <ChatsHeader />
      <ChatList />
      <ControlPanel />
    </>
  );
}
