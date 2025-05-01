// import { useEffect, useState } from "react"
// import { getData } from "../services/chatServices"

// type data = {
//     name: string,
//     url: string,
// }

import { ChatContainer } from "@components/ui/Container";
import InputChat from "@layouts/chat-bot/InputChat";

const Chat = () => {
  return (
    <>
      <section className="h-[100vh] w-full flex flex-col items-center justify-center">
        <ChatContainer>
          <div className="h-[90vh] flex items-center text-6xl font-bold px-12 bg-clip-text text-white/0 bg-gradient-to-r from-pink-700 to-blue-500 via-purple-500">
            <h2>Hello, User Computer</h2>
          </div>
          <InputChat />
        </ChatContainer>
      </section>
    </>
  );
};

export default Chat;
