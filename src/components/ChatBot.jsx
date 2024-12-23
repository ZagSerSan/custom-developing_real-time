import React, { useState } from "react"
import axios from "axios"
const API_KEY = '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'

const ChatBot = () => {
  const [messages, setMessages] = useState([]) // Список сообщений
  const [input, setInput] = useState("") // Текущий ввод пользователя

  // Функция отправки сообщения
  const sendMessage = async () => {
    if (!input.trim()) return // Проверка на пустую строку

    // Добавляем сообщение пользователя в чат
    const userMessage = { sender: "user", text: input }
    setMessages((prev) => [...prev, userMessage])

    try {
      // Отправляем запрос к API
      // const response = await axios.post(
      //   "https://henryz-streaming-chat-with-gpt-3-5-turbo-using-l-df92eb4.hf.space/run/predict", // URL модели
      //   { inputs: input },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${API_KEY}`, // Укажи свой API-ключ
      //     },
      //   }
      // )

      // console.log('response.data[0] :>> ', response.data[0])

      //*** */
      const response = await axios.post(
        "https://henryz-streaming-chat-with-gpt-3-5-turbo-using-l-df92eb4.hf.space/run/predict",
        {
          data: [
            "Hello, how are you?",  // Твой запрос
            null,  // Здесь может быть контекст, если это требуется
          ]
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      // Получение данных из ответа
      console.log("Ответ:", response.data);
      //*** */

      // Ответ от бота
      const botMessage = {
        sender: "bot",
        text: response.data[0].generated_text || "Извините, я не понял.",
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Ошибка запроса:", error)
      const errorMessage = {
        sender: "bot",
        text: "Произошла ошибка, попробуйте снова.",
      }
      setMessages((prev) => [...prev, errorMessage])
    }

    setInput("") // Очистить поле ввода
  }

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#c9d9ff" : "#FFFFFF",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Введите сообщение..."
        />
        <button style={styles.button} onClick={sendMessage}>
          Отправить
        </button>
      </div>
      <p>How are you?</p>
      <p>What year is it now?</p>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  },
  chatWindow: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    backgroundColor: "#6b6b6b",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
}

export default ChatBot
