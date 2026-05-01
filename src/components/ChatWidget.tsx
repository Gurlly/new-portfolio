"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Icons
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { AiOutlineRobot, AiOutlineUser } from "react-icons/ai";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-poppins">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 left-0 w-[90vw] sm:w-[350px] h-[500px] bg-black-two/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="w-full bg-gradient-to-r from-dark-green to-black-two p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <AiOutlineRobot className="text-dirty-white size-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Nathanael's AI</h3>
                  <p className="text-xs text-gray-400">Ask about my projects!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.length === 0 && (
                <div className="text-center text-sm text-gray-400 mt-10">
                  Hi! I can answer questions about Nathanael's resume, tech
                  stack, or data science projects. What would you like to know?
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={clsx(
                    "flex gap-3 max-w-[85%]",
                    m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto",
                  )}
                >
                  <div
                    className={clsx(
                      "p-1.5 rounded-full h-fit flex-shrink-0",
                      m.role === "user" ? "bg-green-gray/50" : "bg-white/10",
                    )}
                  >
                    {m.role === "user" ? (
                      <AiOutlineUser size={16} color="white" />
                    ) : (
                      <AiOutlineRobot size={16} color="white" />
                    )}
                  </div>
                  <div
                    className={clsx(
                      "p-3 rounded-2xl text-sm leading-relaxed break-words",
                      m.role === "user"
                        ? "bg-green-gray text-white rounded-tr-sm"
                        : "bg-white/5 text-gray-200 border border-white/5 rounded-tl-sm",
                    )}
                  >
                    {/* v5: UIMessage has no .content — use .parts exclusively */}
                    {m.parts.map((part, index) =>
                      part.type === "text" ? (
                        <span key={index}>{part.text}</span>
                      ) : null,
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-gray-400 text-sm ml-2">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-100">●</span>
                  <span className="animate-bounce delay-200">●</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleFormSubmit}
              className="p-4 border-t border-white/10 bg-black/20"
            >
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-green-gray transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-green-gray text-white rounded-full hover:bg-green-gray/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-green-gray to-dark-green rounded-full shadow-lg shadow-black/50 flex items-center justify-center text-white border border-white/20 relative"
      >
        <IoChatbubbleEllipsesOutline size={28} />
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dirty-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-dirty-white"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}