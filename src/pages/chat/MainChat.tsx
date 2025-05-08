import { useState, useEffect, useRef } from "react";
import { getData } from "@services/ChatServices";
import { ChatContainer } from "@components/ui/Container";
import { DataItem } from "@type/pages";
import Avatar from "@img/avatar-mask.png";

// Layout
import InputChat from "./InputChat";

const MainChat = () => {
  const [services, setServices] = useState<DataItem[]>([]);
  const [explanations, setExplanations] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handlePrompt = async (input: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await getData(input);
      if (
        Array.isArray(response.services) &&
        Array.isArray(response.explanation_ai)
      ) {
        setServices(response.services);
        setExplanations(response.explanation_ai);
      } else {
        setError("Data format is invalid");
      }
    } catch (err) {
      console.error("Error getting data: ", err);
      setError("Connection Error while getting data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [services, explanations]);

  return (
    <section className="h-[100vh] w-full flex flex-col items-center justify-center">
      <ChatContainer>
        <div className="h-[90vh] flex flex-col justify-center">
          <div
            ref={chatBoxRef}
            className="mt-6 w-full px-6 py-4 space-y-2 overflow-y-auto max-h-[60vh] rounded-lg bg-white"
          >
            {loading && <span className="loader"></span>}

            {!loading && services.length === 0 && explanations.length === 0 && (
              <>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-white/0">
                  Hello, User Computer
                </h2>
                <p className="text-gray-400">
                  Belum ada hasil, silakan kirim pertanyaan.
                </p>
              </>
            )}

            {explanations.map((item) => (
              <>
                <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-2">
                  <img
                    src={Avatar}
                    alt="Avatar Images"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                  <h2 className="font-bold">Haruto AI</h2>
                </div>
                <p key={item.prompt} className="">
                  {item.prompt}
                </p>
              </>
            ))}

            {services.map((item) => (
              <div
                key={item.name ?? "No Named" + item.url ?? "Unknown URL"}
                className="rounded-lg grid grid-cols-2"
              >
                <p className="font-semibold ">{item.name}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {item.url}
                </a>
              </div>
            ))}
          </div>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>

        <InputChat onSend={handlePrompt} loading={loading} />
      </ChatContainer>
    </section>
  );
};

export default MainChat;
