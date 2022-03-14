import React from "react";
// eslint-disable-next-line
import { Routes, Route, Link } from "react-router-dom";
import { Chats } from "./pages/chats";

function App() {
  return (
    <div className="App">
      App.js
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="chat-rooms" element={<Chats />} />
      </Routes>
      {/* <Chats /> */}
    </div>
  );
}

export default App;
