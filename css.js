 <style>     
     ul {
         color: #fff;
     } 
       .close-btn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            color: #66d9ef;
            cursor: pointer;
        }
        .sidebar {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(6, 6, 21, 0.6);
            overflow-x: hidden;
            transition: 0.3s;
            padding-top: 60px;
            z-index: 100;
        }
          .a {
            padding: 15px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #fff;
            display: block;
            transition: 0.3s;
        }
        .b {
            font-size: 1.8rem;
        }
        .h {
            font-size: 1.3rem;
            color: #ffa500;
        }
        .c {
            padding: 15px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #fff;
            display: block;
            transition: 0.3s;
        }

     @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.typing-indicator {
    display: flex;
    align-items: center;
}

.typing-indicator .typing {
    display: flex;
    margin-left: 5px;
}

.typing-indicator .dot {
    width: 6px;
    height: 6px;
    background-color: var(--accent-color);
    border-radius: 50%;
    margin: 0 3px;
    animation: bounce 1s infinite;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

     .fluor {
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 114.5vh;
  background-image: linear-gradient(to right, #ffff00, #ff0000, #f5f5, #ff6a94e7, #0f0, #0000ff);
  background-size: 300% 100%;
  animation: fluor 10s ease infinite;
}

@keyframes fluor {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
     .ffg {
         background-color: rgba(6, 6, 21, 0.6);
         text-algn: center;
         padding: 15px;
         border: 1.2px solid #00f7ff;
         border-radius: 5px;
     }
     .abc {
         color: #000;
         background-color: #66d9ef;
         font-family: Times;
         padding: 20px;
         font-size: 112%;
         border: 1px solid #00f7ff;
     }
     
     .tt {
         font-size: 1.7rem;
         padding-right: 20px;
         cursor: pointer;
     }
     
:root {
    --primary-color-light: #f0f0f0;
    --primary-color-dark: #2c2c2c;
    --text-color-light: #333;
    --text-color-dark: #f0f0f0;
    --accent-color: hsl(29, 8%, 65%);
    --bg-color-light: #ffffff;
    --bg-color-dark: #1c1c1c;
    --border-color-light: #e0e0e0;
    --border-color-dark: #444;
}

body {
    margin: 0;
    padding: 0;
    width: 360px;
    font-family: Arial, sans-serif;
    background-color: #fff;
    transition: background-color 0.3s ease;
    font-family: Times;
}

.chatbot-container {
    width: 400px;
    max-width: 94%;
    margin: 30px auto;
    background-color: #DDD;
    border: 1px solid #00f7ff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, border-color 0.3s ease;
    box-shadow: 0 0 10px #00f7ff;
    
}

.chatbot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #800080;
    color: white;
    border: 1px solid #800080;
}

.chatbot-header h2 {
    margin: 0;
    font-size: 18px;
    font-family: Times;
    color: #000;
    font-weight: bold;
    text-indent: 15pt;
}

.chatbot-actions {
    display: flex;
}

.icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    font-size: 24px;
}

.chatbox {
    height: 480px;
    background-color: rgba(6, 6, 21, 0.8);
    border-top: 2px solid #ffa500;
    overflow-y: auto;
    padding: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    font-family: Times;
}

.chat-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.chat {
    margin: 10px 0;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    font-family: Times;
    color: #fff;
}

.chat.incoming .material-symbols-outlined {
    margin-right: 10px;
    color: var(--accent-color);
}

.chat p {
    background-color: #DDD;
    color: #000;
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 70%;
    word-wrap: break-word;
    transition: background-color 0.3s ease;
    font-family: Times;
}

.chat.outgoing p {
    background-color: var(--accent-color);
    color: white;
    margin-left: auto;
}

.chat-input {
    display: flex;
    padding: 12px;
    background-color: #ffa500;
    border-top: 1px solid #ff500;
    font-family: Times;
}

.chat-input textarea {
    flex: 1;
    border: none;
    padding: 10px;
    border-radius: 20px;
    resize: none;
    height: 20px;
    transition: background-color 0.3s ease;
    background-color: #00f7ff;
    font-family: Times;
}

.chat-input textarea:focus {
    outline: none;
    background-color: #00f7ff;
    font-family: Times;
}

.send-icon {
    padding-top: 7px;
    font-size: 24px;
    color: #0f0;
    margin-left: 10px;
    cursor: pointer;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.typing-indicator {
    display: flex;
    align-items: center;
}

.typing-indicator p {
    background-color: var(--primary-color-light);
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 70%;
    word-wrap: break-word;
}

.typing-indicator .dot {
    width: 6px;
    height: 6px;
    background-color: var(--accent-color);
    border-radius: 50%;
    margin: 0 3px;
    animation: bounce 1s infinite;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

body.dark-mode {
    background-color: #000;
    font-family: Times;
}

body.dark-mode .chatbot-container {
    background-color: #000;
    border-color: var(--border-color-dark);
    font-family: Times;
}

body.dark-mode .chatbot-header {
    background-color: var(--primary-color-dark);
    color: white;
    font-family: Times;
}

body.dark-mode .chat p {
    background-color: #DDD;
    color: #000;
}

body.dark-mode .chat.outgoing p {
    background-color: var(--accent-color);
    color: white;
}

body.dark-mode .chat-input {
    background-color: var(--bg-color-dark);
}

body.dark-mode .chat-input textarea {
    background-color: #00f7ff;
    color: var(--text-color-light);
}
body.dark-mode .abc {
    background-color: #000;
    color: #fff;
    box-shadow: 0 0 10px #00f7ff;
    border: 1px;
}
body.dark-mode .fluor {
    background-image: linear-gradient(to right, #000, #000);
}
body.dark-mode .ffg {
    box-shadow: 0 0 10px #00f7ff;
}

.social-links {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .social-link {
      margin: 0 10px;
    }
    .social-icon {
      font-size: 2.5rem;
      border: 2px solid;
      border-radius: 50%;
      padding: 10px;
      animation: colorBorder 5s infinite linear alternate;
    }
    .fa-facebook-messenger {
      color: #1877f2;
    }
    .fa-whatsapp {
      color: #25D366;
    }
    .fa-github {
      color: #333;
    }
    @keyframes colorBorder {
      0% {
        border-color: #ff79c6;
      }
      5% {
        border-color: #ff79c6;
      }
      25% {
        border-color: #8be9fd;
      }
      50% {
        border-color: #50fa7b;
      }
      75% {
        border-color: #ffb86c;
      }
      100% {
        border-color: #bd93f9;
      }
    }
</style>
