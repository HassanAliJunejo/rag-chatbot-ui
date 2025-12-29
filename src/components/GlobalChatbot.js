import React, { useState, useEffect } from 'react';
import ChatbotPanel from './ChatbotPanel';
import clsx from 'clsx';
import styles from '../css/robotics-layout.module.css';

// Global Chatbot Component that appears on all pages
const GlobalChatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  // Ensure the button stays on top of all elements
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .global-chatbot-button {
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Chatbot button - always visible on all pages */}
      <button
        className={clsx(styles.chatbotButton, isChatbotOpen ? styles.chatbotButtonOpen : '')}
        onClick={toggleChatbot}
        aria-label="Open chatbot"
        style={{ zIndex: 9999 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.903 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.403-3.718 3.413-3.979z" />
        </svg>
      </button>

      {/* Chatbot panel */}
      <ChatbotPanel isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </>
  );
};

export default GlobalChatbot;