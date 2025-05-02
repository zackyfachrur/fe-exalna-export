import { useState, useEffect, useRef } from "react";
import { getData } from "@services/ChatServices";
import { ChatContainer } from "@components/ui/Container";
import InputChat from "@layouts/chat-bot/InputChat";
import { DataItem } from "@type/pages";

const Chat = () => {
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
        <div className="h-[90vh] flex flex-col justify-between">
          <h2 className="text-xl font-semibold">Hello, User Computer</h2>

          <div
            ref={chatBoxRef}
            className="mt-6 w-full px-6 py-4 space-y-2 overflow-y-auto max-h-[60vh] rounded-lg border "
          >
            {loading && (
              <p className="text-blue-300 animate-pulse text-center">
                Loading...
              </p>
            )}

            {!loading && services.length === 0 && explanations.length === 0 && (
              <p className="text-gray-400 text-center">
                Belum ada hasil, silakan kirim pertanyaan.
              </p>
            )}

            {explanations.map((item) => (
              <p key={item.prompt} className="">
                {item.prompt}
              </p>
            ))}

            {services.map((item) => (
              <div
                key={item.name ?? "No Named" + item.url ?? "Unknown URL"}
                className="p-3 border rounded"
              >
                <p className="font-semibold ">{item.name}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline break-all"
                >
                  {item.url}
                </a>
              </div>
            ))}
          </div>

          <InputChat onSend={handlePrompt} loading={loading} />

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </ChatContainer>
    </section>
  );
};

export default Chat;
