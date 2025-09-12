// "use client";

// import { useTranslations } from "next-intl";
// import React, { useEffect, useRef, useState } from "react";
// import logo from "@/assets/logo.webp";
// import Image from "next/image";

// import {
//   IconSend,
//   IconUser,
//   IconX,
//   IconMinus,
//   IconTrash,
//   IconMessage,
// } from "@tabler/icons-react";

// interface Message {
//   text: string;
//   isUser: boolean;
//   timestamp: string;
//   isWelcome?: boolean;
//   isTyping?: boolean;
//   showButtons?: boolean;
// }

// interface BotApiResponse {
//   success: boolean;
//   response: string | string[];
//   timestamp: string;
//   error?: string;
// }

// export default function FloatingChatbot() {
//   const t = useTranslations("detailServices.automations");
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [sessionId, setSessionId] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPolicyModal, setShowPolicyModal] = useState(false);
//   const [policyAccepted, setPolicyAccepted] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const messagesContainerRef = useRef<HTMLDivElement>(null);

//   // Check localStorage on mount
//   useEffect(() => {
//     const hasAccepted = localStorage.getItem("policyAccepted");
//     if (hasAccepted === "true") {
//       setPolicyAccepted(true);
//     }
//   }, []);

//   // Show policy modal when chat opens if not accepted
//   useEffect(() => {
//     if (isOpen && !policyAccepted && messages.length === 0) {
//       setShowPolicyModal(true);
//     }
//   }, [isOpen, policyAccepted, messages.length]);

//   // Initialize with user's greeting and Molokaih Bot response
//   useEffect(() => {
//     if (isOpen && messages.length === 0 && policyAccepted && !showPolicyModal) {
//       const currentTime = new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//       setMessages([
//         {
//           text: t("bots.molokaih.saludo_me"),
//           isUser: true,
//           timestamp: currentTime,
//         },
//         {
//           text: t("bots.molokaih.saludo"),
//           isUser: false,
//           timestamp: currentTime,
//           isTyping: true,
//           showButtons: false,
//         },
//       ]);
//       setSessionId(generateSessionId());

//       // Remove typing animation and show buttons after 2 seconds
//       setTimeout(() => {
//         setMessages((prev) =>
//           prev.map((msg, index) =>
//             index === prev.length - 1
//               ? { ...msg, isTyping: false, showButtons: true }
//               : msg
//           )
//         );
//       }, 2000);
//     }
//   }, [isOpen, t, policyAccepted, showPolicyModal]);

//   const generateSessionId = () => {
//     return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//   };

//   const scrollToBottom = () => {
//     if (messagesContainerRef.current) {
//       messagesContainerRef.current.scrollTop =
//         messagesContainerRef.current.scrollHeight;
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessageToApi = async (
//     message: string,
//     sessionId: string,
//     saludo?: string
//   ) => {
//     try {
//       const payload = {
//         message,
//         sessionId,
//         botType: "molokaih",
//         timestamp: new Date().toISOString(),
//         ...(saludo && { saludo }),
//       };

//       const response = await fetch("/api/bot", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data: BotApiResponse = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || `HTTP error! status: ${response.status}`);
//       }

//       if (!data.success) {
//         throw new Error(data.error || "Unknown error occurred");
//       }

//       return data.response;
//     } catch (error) {
//       console.error("Error sending message to API:", error);
//       throw error;
//     }
//   };

//   const handleSendMessage = async (message: string) => {
//     if (!message.trim()) return;

//     const currentTime = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//     const isFirstUserMessageAfterGreeting =
//       messages.length === 2 && messages[1].text === t("bots.molokaih.saludo");

//     setMessages((prev) => [
//       ...prev,
//       { text: message, isUser: true, timestamp: currentTime },
//     ]);
//     setInputMessage("");

//     setIsLoading(true);

//     setMessages((prev) => [
//       ...prev,
//       {
//         text: "",
//         isUser: false,
//         timestamp: currentTime,
//         isTyping: true,
//       },
//     ]);

//     try {
//       const botResponse = await sendMessageToApi(
//         message,
//         sessionId,
//         isFirstUserMessageAfterGreeting ? t("bots.molokaih.saludo") : undefined
//       );

//       setTimeout(() => {
//         // Handle botResponse as either a string or array of strings
//         const responseMessages = Array.isArray(botResponse)
//           ? botResponse
//           : botResponse
//               .split("\n\n")
//               .filter((text: string) => text.trim() !== "");

//         const newMessages = responseMessages.map((text: string) => ({
//           text,
//           isUser: false,
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           isTyping: false,
//         }));

//         setMessages((prev) => [
//           ...prev.slice(0, -1), // Remove the typing message
//           ...newMessages,
//         ]);
//         setIsLoading(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Error:", error);
//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev.slice(0, -1),
//           {
//             text: t("errorMessage"),
//             isUser: false,
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//             isTyping: false,
//           },
//         ]);
//         setIsLoading(false);
//       }, 2000);
//     }
//   };

//   const handleButtonClick = async (buttonText: string) => {
//     await handleSendMessage(buttonText);
//   };

//   const toggleChat = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const minimizeChat = () => {
//     setIsOpen(false);
//   };

//   const clearChat = () => {
//     setMessages([]);
//     setInputMessage("");
//     setSessionId("");
//     setIsLoading(false);
//     setIsOpen(false);
//   };

//   const handleAcceptPolicy = () => {
//     localStorage.setItem("policyAccepted", "true");
//     setPolicyAccepted(true);
//     setShowPolicyModal(false);
//   };

//   const handleRejectPolicy = () => {
//     setShowPolicyModal(false);
//     setIsOpen(false);
//   };

//   function formatMessage(text: string) {
//     // Handle bold text
//     let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

//     // Split text by newlines and handle bullet points
//     const lines = formattedText
//       .split("\n")
//       .filter((line) => line.trim() !== "");
//     const formattedLines = lines.map((line) => {
//       // Check if the line starts with a bullet point
//       if (line.trim().startsWith("*")) {
//         // Remove the bullet point and wrap the content in <li>
//         const content = line.replace(/^\*\s*/, "").trim();
//         return `<li>${content}</li>`;
//       }
//       return line;
//     });

//     // Wrap bullet points in <ul> if they exist
//     const hasBullets = formattedLines.some((line) => line.startsWith("<li>"));
//     if (hasBullets) {
//       formattedText = `<ul class="list-disc pl-5">${formattedLines.join(
//         ""
//       )}</ul>`;
//     } else {
//       formattedText = formattedLines.join("<br />");
//     }

//     return formattedText;
//   }

//   // Define button keys to map over
//   const buttonKeys = ["button1", "button2", "button3"];

//   return (
//     <div className="w-full flex flex-col justify-center items-center">
//       <div>
//         {/* Chat Window */}
//         {isOpen && (
//           <div
//             className="
//               absolute bottom-32 right-0
//               w-[90vw] max-w-[340px] sm:max-w-[380px] md:max-w-[380px]
//               lg:max-w-[350px] xl:max-w-[450px]
//               max-h-[60vh]
//               min-h-[60vh]    bg-zinc-950 border border-white/10
//               rounded-3xl shadow-2xl
//               animate-in slide-in-from-bottom-4 duration-300
//               z-[60] flex flex-col
//               overflow-y-auto
//             "
//           >
//             {/* Policy Modal Overlay inside chat */}
//             {showPolicyModal && (
//               <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-[70]">
//                 <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4 w-full mx-2 max-w-[300px] shadow-2xl">
//                   <h2 className="text-white text-base font-semibold mb-3">
//                     {" "}
//                     {t("bots.molokaih.Polities.title")}
//                   </h2>

//                   <p className="text-white/80 text-sm mb-4">
//                     {t("bots.molokaih.Polities.text")}
//                   </p>
//                   <div className="flex gap-2 justify-end">
//                     <button
//                       onClick={handleRejectPolicy}
//                       className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors flex-1"
//                     >
//                       {t("bots.molokaih.No")}
//                     </button>
//                     <button
//                       onClick={handleAcceptPolicy}
//                       className="px-3 py-1.5 bg-gradient-to-r from-[#25D9D7] to-[#1CBAB8] text-white text-sm rounded-lg hover:scale-105 transition-transform flex-1"
//                     >
//                       {t("bots.molokaih.Yes")}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Chat Header */}
//             <div className="flex items-center justify-between gap-2 mb-3  p-3 sm:p-4 border-b border-white/10 flex-shrink-0">
//               <div className="flex items-center gap-2 flex-1 min-w-0">
//                 <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
//                   <Image
//                     src={logo}
//                     width={500}
//                     height={500}
//                     alt="logo"
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>
//                 <div className="flex flex-col min-w-0">
//                   <h2 className="text-sm sm:text-base font-semibold truncate">
//                     {t("bots.molokaih.name")}
//                   </h2>
//                   <div className="flex items-center gap-1">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     <span className="text-xs text-[#25D9D7]">
//                       {t("bots.molokaih.Available")}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1 flex-shrink-0">
//                 <button
//                   onClick={minimizeChat}
//                   className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80"
//                   aria-label="Minimizar chat"
//                 >
//                   <IconMinus className="w-4 h-4" />
//                 </button>
//                 <button
//                   onClick={clearChat}
//                   className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80"
//                   aria-label="Borrar chat"
//                 >
//                   <IconTrash className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Messages */}
//             <div
//               ref={messagesContainerRef}
//               className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-3"
//               style={{ scrollBehavior: "smooth" }}
//               aria-live="polite"
//             >
//               {messages.map((message, index) => (
//                 <div key={index}>
//                   <div
//                     className={`flex items-start gap-2 ${
//                       message.isUser ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     {!message.isUser && (
//                       <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full flex-shrink-0">
//                         <Image
//                           src={logo}
//                           width={500}
//                           height={500}
//                           alt="logo"
//                           className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
//                         />
//                       </div>
//                     )}
//                     <div
//                       className={`max-w-[75%] sm:max-w-[70%] p-2 sm:p-3 rounded-2xl text-left ${
//                         message.isUser
//                           ? "bg-gradient-to-r from-[#25D9D7] to-[#1CBAB8] text-white rounded-br-none"
//                           : "bg-white/10 text-white rounded-bl-none"
//                       }`}
//                     >
//                       {message.isTyping ? (
//                         <div className="flex items-center space-x-2">
//                           <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
//                           <div
//                             className="w-2 h-2 bg-white/50 rounded-full animate-pulse"
//                             style={{ animationDelay: "0.2s" }}
//                           ></div>
//                           <div
//                             className="w-2 h-2 bg-white/50 rounded-full animate-pulse"
//                             style={{ animationDelay: "0.4s" }}
//                           ></div>
//                         </div>
//                       ) : (
//                         <>
//                           <p
//                             className="text-xs sm:text-sm text-left break-words whitespace-pre-wrap"
//                             dangerouslySetInnerHTML={{
//                               __html: formatMessage(message.text),
//                             }}
//                           />
//                           <p className="text-xs text-white/50 mt-1 text-left">
//                             {message.timestamp}
//                           </p>
//                         </>
//                       )}
//                     </div>
//                     {message.isUser && (
//                       <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#25D9D7] to-[#1CBAB8] text-white flex-shrink-0">
//                         <IconUser size={16} />
//                       </div>
//                     )}
//                   </div>

//                   {/* Service Buttons */}
//                   {message.showButtons && (
//                     <div className="mt-3 flex items-start gap-2 justify-start z-[70]">
//                       <div className="w-6 sm:w-8"></div>
//                       <div className="grid grid-cols-1 gap-2 max-w-[75%] sm:max-w-[70%]">
//                         {buttonKeys.map((key) => (
//                           <button
//                             key={t(`bots.molokaih.${key}`)}
//                             onClick={() =>
//                               handleButtonClick(t(`bots.molokaih.${key}`))
//                             }
//                             className="flex items-center gap-2 p-2 sm:p-3 rounded-lg w-full transition-all duration-300 text-left pointer-events-auto bg-gradient-to-br from-[#25D9D7] to-[#1CBAB8] border-[#25D9D7] hover:ring-2 hover:ring-white/30 cursor-pointer"
//                           >
//                             <div className="text-white font-medium text-xs sm:text-sm truncate">
//                               {t(`bots.molokaih.${key}`)}
//                             </div>
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="p-2 m-3 sm:p-3 bg-white/5 rounded-2xl border border-white/10 flex-shrink-0">
//               <div className="flex items-end gap-2">
//                 <textarea
//                   value={inputMessage}
//                   onChange={(e) => {
//                     setInputMessage(e.target.value);
//                     e.target.style.height = "auto";
//                     e.target.style.height = `${Math.min(
//                       e.target.scrollHeight,
//                       100
//                     )}px`;
//                   }}
//                   placeholder={t("inputPlaceholder")}
//                   rows={1}
//                   disabled={isLoading || !policyAccepted}
//                   className="flex-1 bg-transparent outline-none text-white placeholder-white/50 resize-none overflow-auto disabled:opacity-50 text-xs sm:text-sm max-h-[100px]"
//                 />
//                 <button
//                   onClick={() => handleSendMessage(inputMessage)}
//                   className="p-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 transition-transform disabled:opacity-50 flex-shrink-0"
//                   disabled={
//                     !inputMessage.trim() || isLoading || !policyAccepted
//                   }
//                 >
//                   <IconSend size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Floating Button */}
//         <div>
//           <button
//             onClick={toggleChat}
//             className="
//               w-14 h-14
//               bg-gradient-to-r from-[#9b4dff] to-[#7b2efe]
//               hover:from-[#7b2efe] hover:to-[#5c0edb]
//               rounded-full shadow-lg hover:shadow-xl
//               transition-all duration-300
//               flex items-center justify-center text-white
//               hover:scale-110 cursor-pointer
//             "
//             aria-label="Abrir o cerrar chat"
//             tabIndex={0}
//           >
//             {isOpen ? (
//               <IconX
//                 size={24}
//                 className="transition-transform duration-200 hover:scale-125"
//               />
//             ) : (
//               <IconMessage
//                 size={24}
//                 className="transition-transform duration-200 hover:scale-125"
//               />
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
