import  { useState, useRef, useEffect } from "react";
import { FaTimes, FaComment } from "react-icons/fa";

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showQuickMessages, setShowQuickMessages] = useState(true);
  const messagesEndRef = useRef(null);

  const templateMessages = [
    "Hello! How can I assist you today?",
    "What services are you looking for?",
    "Feel free to ask me anything!"
  ];

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);

    if (!isChatOpen && messages.length === 0) {
      setMessages([
        { role: "assistant", content: "Hi there! I'm here to help. 😊  This is an Ai Chat bot Using hugginfacemodel & vector DB's" }
      ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    setTimeout(() => {
      const aiResponse = "This is a sample AI response.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: aiResponse }
      ]);
    }, 500);
  };

  const handleTemplateClick = (template) => {
    setMessages([...messages, { role: "user", content: template }]);
    setTimeout(() => {
      const aiResponse = `You selected: "${template}". How can I assist further?`;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: aiResponse }
      ]);
    }, 500);
    setShowQuickMessages(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        className="bg-blue-500 text-white rounded-full p-4 shadow-md hover:bg-blue-600"
        onClick={toggleChat}
      >
        {isChatOpen ? <FaTimes /> : <FaComment />}
      </button>

      {isChatOpen && (
        <div className="absolute right-0 bottom-10 bg-white rounded-lg shadow-md p-4 w-80">
          <h3 className="text-lg font-Audiowide mb-2">AI BOT</h3>
          <div className="max-h-48 overflow-y-auto mb-4">
            <ul className="space-y-2">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={`p-2 rounded-lg text-xs flex ${
                    message.role === "user"
                      ? "bg-blue-100 text-blue-600 self-end ml-auto"
                      : "bg-gray-200 text-gray-800 self-start mr-auto"
                  }`}
                  style={{
                    maxWidth: "70%",
                    textAlign: message.role === "user" ? "right" : "left"
                  }}
                >
                  {message.content}
                </li>
              ))}
              {/* Reference for auto-scrolling */}
              <div ref={messagesEndRef} />
            </ul>
          </div>

          {showQuickMessages && (
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Quick Messages:</p>
              <div className="flex flex-wrap gap-2">
                {templateMessages.map((template, index) => (
                  <button
                    key={index}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded"
                    onClick={() => handleTemplateClick(template)}
                  >
                    {template}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
