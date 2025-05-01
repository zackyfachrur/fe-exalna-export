const InputChat = () => {
  return (
    <div className="flex w-full border-2 px-5 py-2 rounded-full border-gray-200 bg-white">
      <button className="bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full mr-4">
        <i className="ri-attachment-line"></i>
      </button>

      <input
        type="text"
        className="w-full outline-none"
        placeholder="Ask Gemini"
      />

      <div className="flex flex-row gap-2">
        <button className="bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
          <i className="ri-mic-line"></i>
        </button>
        <button className="bg-gray-100 px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default InputChat;
