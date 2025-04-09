'use client';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with Zoho CRM today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { token } = useAuth();
  // console.log(inputMessage)
  // console.log("========================================>>>>")
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Get token from localStorage as a fallback
      const storedToken = localStorage.getItem('token');
      const authToken = token || storedToken;

      console.log("Using token for API call:", authToken,storedToken);
      console.log("=======================================>>>>")
      // Call the backend API
      const response = await fetch(`${API_ENDPOINTS.QUERY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        credentials: 'include',
        body: JSON.stringify({
          query: inputMessage,
          question: inputMessage  // Some APIs use 'question' instead of 'query'
        }),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to get response from the chatbot';
        try {
          const errorData = await response.json();
          console.error("API error:", errorData);
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch (e) {
          // If the response is not JSON, use the status text
          console.log(e);
          console.error("Non-JSON error response:", response.statusText);
          errorMessage = `Error ${response.status}: ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("API response:", data);

      // Add bot response to chat
      // Handle different response formats (answer, response, or markdown)
      const responseText = data.answer || data.response || data.markdown || data.content || "I'm sorry, I couldn't process your request.";

      const botMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);

      // Add error message
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-base-200 rounded-lg shadow-xl overflow-hidden w-full">
      {/* Chat Header */}
      <div className="bg-primary text-primary-content p-4">
        <h2 className="text-xl font-bold">Zoho CRM Assistant</h2>
        <p className="text-sm opacity-80">Ask me anything about your CRM data</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'}`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                {message.sender === 'user' ? (
                  <div className="bg-neutral text-neutral-content rounded-full w-10 h-10 flex items-center justify-center">
                    <span>U</span>
                  </div>
                ) : (
                  <div className="bg-primary text-primary-content rounded-full w-10 h-10 flex items-center justify-center">
                    <span>Z</span>
                  </div>
                )}
              </div>
            </div>
            <div className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-primary' : 'bg-base-300'} prose max-w-full`}>
              {message.sender === 'bot' ? (
                <ReactMarkdown>{message.text}</ReactMarkdown>
              ) : (
                message.text
              )}
            </div>
            <div className="chat-footer opacity-50 text-xs">
              {formatTime(message.timestamp)}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="bg-primary text-primary-content rounded-full w-10 h-10 flex items-center justify-center">
                <span>Z</span>
              </div>
            </div>
            <div className="chat-bubble bg-base-300">
              <span className="loading loading-dots loading-sm"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-4 bg-base-300">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="input input-bordered flex-1"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading || !inputMessage.trim()}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
