import React, { useState, useEffect, useRef } from "react";
import styles from "./chatbot.module.css";

export default function Chatbot() {
  const [chatboxVisible, setChatboxVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const chatBoxRef = useRef();

  const [messages, setMessages] = useState([
    { role: "bot", message: "Hello Morgan Freeman! How can i help you?" },
  ]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scroll({
        top: chatBoxRef.current.scrollHeight,
      });
    }
  }, [messages]);

  const sendMessage = (e, input) => {
    e.preventDefault();
    setUserInput("");
    const userMessage = { role: "user", message: input };
    const botMessage = {
      role: "bot",
      message: "Do you have any more questions?",
    };
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {chatboxVisible && (
          <div className={styles.chat__container}>
            <div className={styles.chat__head}>
              <img src="/chat_buddy.svg" alt="" />
              <h3>Flux Chatbot</h3>
              <img
                onClick={() => {
                  setChatboxVisible(false);
                }}
                className="ml-auto cursor-pointer"
                src="/close.svg"
                alt=""
              />
            </div>
            <div ref={chatBoxRef} className={styles.chat__body}>
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.chat__bubble} ${
                    item.role === "user" && "justify-end"
                  }`}
                >
                  <img
                    className={
                      item.role === "bot" ? `order-first` : `order-last`
                    }
                    src={item.role === "bot" ? `/bubble_icon.svg` : `/user.png`}
                    alt=""
                  />

                  <div
                    className={`${styles.chat__bubble_message} ${
                      item.role === "user" && "bg-[#276CD44A]"
                    }`}
                  >
                    <p>{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <form
              className={styles.chat__input}
              onSubmit={(e) => sendMessage(e, userInput)}
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write message here..."
              />
              <button disabled={userInput.length <= 0} type="submit">
                send
              </button>
            </form>
          </div>
        )}
        <div
          onClick={() => setChatboxVisible(!chatboxVisible)}
          className={styles.chat__toggle}
        >
          <img src="/chat_buddy.svg" alt="" />
          <p>Chatbot</p>
        </div>
      </div>
    </div>
  );
}
