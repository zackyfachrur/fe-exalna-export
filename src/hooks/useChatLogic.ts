import { useState, useEffect, useRef } from "react";
import { getData } from "@services/ChatServices";
import { useDispatch } from "react-redux";
import { addChatLog, selectChat } from "@store/chatSlice";
import { ChatLog } from "@type/fetch";
import { DataItem } from "@type/pages";

export const useChatLogic = () => {
  const [services, setServices] = useState<DataItem[]>([]);
  const [explanations, setExplanations] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
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

        const newChatLog: ChatLog = {
          id: Date.now(),
          keyword: input,
          prompt: input,
          response: JSON.stringify(response),
          created_at: new Date().toISOString(),
        };

        dispatch(addChatLog(newChatLog));
        dispatch(selectChat(newChatLog));
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

  return {
    services,
    explanations,
    loading,
    error,
    handlePrompt,
    chatBoxRef,
  };
};
