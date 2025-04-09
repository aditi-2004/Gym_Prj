// "use client"; // For Next.js compatibility
// import { useEffect, useState } from "react";

// const ChatWidget = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cdn.botpress.cloud/webchat/v2.3/inject.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       window.botpress = window.botpress || {};
//       window.botpress.init({
//         botId: "8ffc47fa-86eb-471d-b934-c3741f64b274", // Your provided botId
//         hostUrl: "https://api.botpress.cloud", // Default Botpress cloud host
//         themeColor: "#3f9b92", // Matches your teal accent
//         themeName: "modern",
//         botName: "Bilvine Energym Support",
//         enableAutoOpen: false,
//       }).then(() => {
//         console.log("Botpress initialized successfully with botId");
//       }).catch((error) => {
//         console.error("Botpress initialization failed:", error);
//       });
//       window.botpress.on("webchat:ready", () => {
//         if (isChatOpen) {
//           window.botpress.open();
//         }
//       });
//     };

//     script.onerror = () => {
//       console.error("Failed to load Botpress script");
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [isChatOpen]);

//   const toggleChat = () => {
//     if (window.botpress) {
//       if (isChatOpen) {
//         window.botpress.close();
//       } else {
//         window.botpress.open();
//       }
//       setIsChatOpen(!isChatOpen);
//     } else {
//       console.warn("Botpress is not initialized yet");
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         zIndex: 1000,
//       }}
//     >
//       <button
//         onClick={toggleChat}
//         style={{
//           background: "#3f9b92",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           fontSize: "24px",
//           cursor: "pointer",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//           display: isChatOpen ? "none" : "block",
//         }}
//       >
//         💬
//       </button>
//       <div
//         id="webchat-container"
//         style={{
//           height: isChatOpen ? "600px" : "0",
//           width: isChatOpen ? "400px" : "0",
//           transition: "height 0.3s ease, width 0.3s ease",
//           overflow: "hidden",
//         }}
//       />
//     </div>
//   );
// };

// export default ChatWidget;