import { useEffect, useState } from "react";
import useUserName from "@hooks/useUserName";
import { ChatContainer } from "@components/ui/Container";
import AILogo from "@img/AI-Logo.png";
import { ExplanationItem, ServiceItem } from "@type/fetch";
import InputChat from "./InputChat";
import { useChatLogic } from "@hooks/useChatLogic";

import { useSelector} from "react-redux";
import { RootState} from "@store/index";

const MainChat = () => {
  const username = useUserName();
  const { loading, handlePrompt } = useChatLogic();

  const selectedChat = useSelector((state: RootState) => state.chat.selectedChat);

  const [parsedData, setParsedData] = useState<{
    explanation_ai: ExplanationItem[];
    services: ServiceItem[];
  }>({ explanation_ai: [], services: [] });

  useEffect(() => {
    if (selectedChat) {
      try {
        const parsed = JSON.parse(selectedChat.response);
        setParsedData({
          explanation_ai: parsed.explanation_ai || [],
          services: parsed.services || [],
        });
      } catch (err) {
        console.error("Gagal parse response JSON", err);
        setParsedData({ explanation_ai: [], services: [] });
      }
    } else {
      setParsedData({ explanation_ai: [], services: [] });
    }
  }, [selectedChat]);

  return (
    <section className="h-[100vh] w-full flex flex-col items-center justify-center">
      <ChatContainer>
        <div className="h-[90vh] flex flex-col justify-center gap-4">
          {selectedChat ? (
            <div className="self-end bg-white px-8 py-4 rounded-2xl rounded-tr-none">
              <h3 className="font-medium italic text-lg">{selectedChat.keyword}</h3>
            </div>
          ) : (
            <h3 className="font-bold text-6xl text-white/0 bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">Hello, {username}</h3>
          )}
          {loading && <span className="loader"></span>}
          <div
            className={
              selectedChat
                ? "w-full px-12 py-8 space-y-4 overflow-y-auto max-h-[60vh] rounded-xl bg-white rounded-tl-none drop-shadow-2xl"
                : ""
            }
          >
            {parsedData.explanation_ai.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-4 mb-6 pt-4">
                  <img
                    src={AILogo}
                    alt="Avatar"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                  <h2 className="font-bold">Gemini AI</h2>
                </div>
                <p>{item.prompt}</p>
              </div>
            ))}

            {parsedData.services.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-2 ">
                <p className="font-semibold">{item.name}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {item.url}
                </a>
              </div>
            ))}
          </div>
        </div>

        <InputChat onSend={handlePrompt} loading={loading} />
      </ChatContainer>
    </section>
  );
};

export default MainChat;
