import { useState } from "react";
import { InputChatProps } from "@type/layouts";

const InputChat = ({ onSend, loading }: InputChatProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim || loading) return;
    onSend(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full border-2 px-5 py-2 rounded-full border-gray-200 bg-white"
    >
      <button
        type="button"
        className="bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full mr-4"
        disabled={loading}
      >
        <i className="ri-attachment-line"></i>
      </button>

      <input
        type="text"
        className="w-full outline-none"
        placeholder="Ask Gemini"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />

      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full"
          disabled={loading}
        >
          <i className="ri-mic-line"></i>
        </button>
        <button
          type="submit"
          className="bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full"
          disabled={loading}
        >
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </div>
    </form>
  );
};

export default InputChat;
