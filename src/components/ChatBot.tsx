"use client";

import { useState, useEffect, useRef } from "react";
import {
  IconArrowLeft,
  IconMessageChatbot,
  IconSend,
  IconUser,
} from "@tabler/icons-react";
// import { v7 } from "uuid";

import logoMolokaih from "@/assets/logos/horizontal-black.png";
import logoUserBot from "@/assets/logos/isotipo-white.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import Link from "next/link";

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sent: boolean;
  status: "sending" | "sent" | "error";
  errorMessage?: string;
}

export default function ChatBot({
  title = "Premium Coat",
  actionMessage = "Hello! 👋 I'm the Premium Coat virtual assistant. I'm here to answer all your questions. How can we help you?",
  inputPlaceholder = "Write a message...",
  logo = logoMolokaih.src,
}: {
  title?: string;
  actionMessage?: string;
  inputPlaceholder?: string;
  logo?: string;
}) {
  // const sessionId = useRef(v7());
  const sessionId = "1213";

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [isLoadingMessage, setIsLoadingMessage] = useState(false);

  const [viewChat, setViewChat] = useState(false);

  const [checked, setChecked] = useState(true);

  const [viewTerms, setViewTerms] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  const toggleChat = () => {
    setViewChat((prev) => !prev);
  };

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingMessage(true);

    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      timestamp: new Date(),
      sent: true,
      status: "sending",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          sessionId: sessionId,
          // sessionId: sessionId.current,
        }),
      });

      const data = await response.text();

      if (response.ok) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === newMessage.id ? { ...msg, status: "sent" } : msg
          )
        );

        const botReply: Message = {
          id: Date.now().toString() + "-bot",
          content: JSON.parse(data).reply,
          timestamp: new Date(),
          sent: false,
          status: "sent",
        };

        setMessages((prev) => [...prev, botReply]);
        setIsLoadingMessage(false);
      } else {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === newMessage.id ? { ...msg, status: "sent" } : msg
          )
        );

        const botReply: Message = {
          id: Date.now().toString() + "-bot",
          content:
            "At this moment I can't answer your message, please try again later.",
          timestamp: new Date(),
          sent: false,
          status: "sent",
        };

        setMessages((prev) => [...prev, botReply]);
        setIsLoadingMessage(false);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id
            ? { ...msg, status: "error", errorMessage }
            : msg
        )
      );
      setIsLoadingMessage(false);
    }
  };

  function formatMessageText(text: string) {
    const lines = text.split("\n");

    return lines.map((line, index) => {
      const trimmed = line.trim();

      // Si es un item de lista que empieza con "* "
      if (trimmed.startsWith("* ")) {
        return (
          <div key={index} className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>{parseInlineMarkdown(trimmed.slice(2))}</span>
          </div>
        );
      }

      // Si es una línea común
      return (
        <p key={index} className="mb-1">
          {parseInlineMarkdown(line)}
        </p>
      );
    });
  }

  function parseInlineMarkdown(text: string) {
    const regex = /(\*\*(.*?)\*\*|\*(.*?)\*|`(.*?)`|\[(.*?)\]\((.*?)\))/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      if (match[1]?.startsWith("**")) {
        parts.push(<strong key={parts.length}>{match[2]}</strong>);
      } else if (match[1]?.startsWith("*")) {
        parts.push(<em key={parts.length}>{match[3]}</em>);
      } else if (match[4]) {
        parts.push(<code key={parts.length}>{match[4]}</code>);
      } else if (match[5] && match[6]) {
        parts.push(
          <a
            key={parts.length}
            href={match[6]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {match[5]}
          </a>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-[1100]">
      <AnimatePresence>
        {viewChat && (
          <motion.div
            style={{ transformOrigin: "bottom right" }}
            initial={{ y: 50, x: 10, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, x: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, x: 10, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col w-[400px] h-[600px] max-md:max-w-[91dvw] max-md:h-[85dvh] bg-white text-black rounded-3xl shadow-2xl border border-black/5 relative overflow-hidden"
          >
            {/* Header */}
            <header className="flex justify-center items-center p-4 gap-10 relative ">
              <button className="cursor-pointer" onClick={toggleChat}>
                <IconArrowLeft
                  className="absolute top-[1.10rem] left-4"
                  strokeWidth={2}
                />
              </button>

              <div className="flex justify-center items-center gap-1 flex-1">
                {/* <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div> */}
                <Image
                  src={logo}
                  width={250}
                  height={250}
                  alt="Logo Molokaih"
                  className="h-8 w-auto  "
                />
                {/* <h1 className="text-lg font-semibold">{title}</h1> */}
              </div>
            </header>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.length === 0 ? (
                <div className="w-full flex items-center justify-center h-[95%] text-black/70 text-center">
                  <p>{actionMessage}</p>
                </div>
              ) : (
                <div>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex mb-5  ${
                        message.sent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`w-full flex flex-col justify-center  max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl  ${
                          message.sent
                            ? "text-end items-end"
                            : "text-start items-start"
                        } `}
                      >
                        <div
                          className={`break-words  w-max max-w-full py-1.5 px-3 rounded-2xl leading-relaxed text-sm md:text-base ${
                            message.sent
                              ? "text-white bg-secondary rounded-br-none shadow-2xl"
                              : "bg-primary text-white rounded-bl-none"
                          }`}
                        >
                          <p className="-mb-1">
                            {formatMessageText(message.content)}
                          </p>
                        </div>

                        {!message.sent ? (
                          <div className="flex justify-start items-center gap-2 mt-2">
                            <div className="size-7 p-1.5 rounded-full bg-primary">
                              <Image
                                src={logoUserBot}
                                width={250}
                                height={250}
                                alt=""
                                className="size-full object-contain"
                              />
                            </div>

                            <p className="text-xs font-medium">Premium coat</p>

                            <span className="text-[10px] opacity-50">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        ) : (
                          <div className="flex justify-start items-center gap-2 mt-2">
                            <span className="text-[10px] opacity-50">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>

                            <p className="text-xs font-medium">You</p>

                            <div className="size-7 p-1.5 rounded-full bg-secondary text-white">
                              <IconUser className="size-full object-contain" />
                            </div>
                          </div>
                        )}

                        {/* <div className="flex justify-between items-center mt-1">
                        {message.sent && (
                          <span className="text-xs ml-2">
                            {message.status === "sending" && "⏳"}
                            {message.status === "sent" && "✓"}
                            {message.status === "error" && "⚠️"}
                          </span>
                        )}
                      </div> */}
                        {message.status === "error" && message.errorMessage && (
                          <p className="text-xs text-red-300 mt-1">
                            {message.errorMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoadingMessage && (
                    <div className={`flex justify-start`}>
                      <div
                        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl text-start`}
                      >
                        <div
                          className={`break-words py-1.5 px-3 rounded-2xl leading-relaxed text-sm md:text-base bg-white text-black/80 rounded-bl-none flex gap-2`}
                        >
                          <div
                            className="bg-primary w-3 h-3 rounded-full animate-bounce "
                            style={{ animationDelay: "0s" }}
                          ></div>
                          <div
                            className="bg-primary w-3 h-3 rounded-full animate-bounce"
                            style={{ animationDelay: "0.15s" }}
                          ></div>
                          <div
                            className="bg-primary w-3 h-3 rounded-full animate-bounce"
                            style={{ animationDelay: "0.3s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="p-4 border-t border-black/10 sticky bottom-0 bg-white"
            >
              <div className="flex items-center gap-2 min-h-[40px]">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={inputPlaceholder}
                  className="flex-1 min-w-0 px-4 py-2 bg-white text-black rounded-full focus:outline-none border border-black/10"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || checked === false}
                  className="bg-primary text-white rounded-full hover:scale-105 active:scale-95 transition-all size-10 min-w-[40px] p-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center shrink-0"
                >
                  <IconSend className="size-full" />
                </button>
              </div>
            </form>

            {viewTerms && (
              <div className="flex flex-col justify-center items-center gap-5 p-4 text-sm text-[#444] absolute w-full h-full top-0 left-0 bg-white/50 rounded-3xl backdrop-blur-sm z-10">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="checkbox"
                    className={`cursor-pointer rounded-sm w-4 h-4 ${
                      checked ? "bg-primary" : "bg-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={checked}
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                  <p>
                    I accept the
                    <Link href={"/"} className="text-secondary cursor-pointer">
                      {" "}
                      terms and conditions
                    </Link>
                  </p>
                </div>

                <button
                  disabled={!checked}
                  onClick={() => setViewTerms(false)}
                  className="bg-primary text-white rounded-full py-2 px-4 disabled:opacity-50 cursor-pointer"
                >
                  Accept and Save
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="bg-primary  rounded-full p-3 cursor-pointer  shadow-lg hover:bg-primary/90 transition-colors w-14 h-14 flex justify-center items-center active:scale-95 z-20"
        onClick={toggleChat}
        name="open-chat"
      >
        <Image
          src={logoUserBot}
          width={250}
          height={250}
          alt=""
          className="size-full object-contain"
        />
        {/* <IconMessageChatbot className="w-full h-full" /> */}
      </button>
    </div>
  );
}
