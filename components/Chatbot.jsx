"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const Chatbot = () => {
  useEffect(() => {
    // This function will run after the script is loaded
    const initializeChatbot = () => {
      if (typeof window !== 'undefined' && window.AgentInitializer) {
        window.AgentInitializer.init({
          rootId: "JotformAgent-01968d2a682a716ca42fcaa561e450c5b1e0",
          formID: "01968d2a682a716ca42fcaa561e450c5b1e0",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isInitialOpen: false,
          isDraggable: false,
          background: "linear-gradient(180deg, #0F53B4 0%, #0F53B4 100%)",
          buttonBackgroundColor: "#246506",
          buttonIconColor: "#FFFFFF",
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hi! How can I assist you?",
            pulse: "Yes",
            position: "right"
          }
        });
      }
    };

    // Check if the script is already loaded
    if (typeof window !== 'undefined' && window.AgentInitializer) {
      initializeChatbot();
    }
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.AgentInitializer) {
            window.AgentInitializer.init({
              rootId: "JotformAgent-01968d2a682a716ca42fcaa561e450c5b1e0",
              formID: "01968d2a682a716ca42fcaa561e450c5b1e0",
              queryParams: ["skipWelcome=1", "maximizable=1"],
              domain: "https://www.jotform.com",
              isInitialOpen: false,
              isDraggable: false,
              background: "linear-gradient(180deg, #0F53B4 0%, #0F53B4 100%)",
              buttonBackgroundColor: "#246506",
              buttonIconColor: "#FFFFFF",
              variant: false,
              customizations: {
                greeting: "Yes",
                greetingMessage: "Hi! How can I assist you?",
                pulse: "Yes",
                position: "right"
              }
            });
          }
        }}
      />
    </>
  );
};

export default Chatbot; 