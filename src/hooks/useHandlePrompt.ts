import { useState, useRef, useEffect } from 'react';
import { DataItem } from "@type/pages";
import { getData } from "@services/ChatServices";

const useHandlePrompt = () => { 
    
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

    return {
        services,
        explanations,
        loading,
        error,
        chatBoxRef,
        handlePrompt
    }
    
}

export default useHandlePrompt;