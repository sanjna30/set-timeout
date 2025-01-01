import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isSent, setIsSent] = useState(false);

  const sendFriendRequest = () => {
    setIsSending(true);
    setIsSent(false);
    setCountdown(5);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsSending(false);
      setIsSent(true);
    }, 5000);
  };

  return (
    <div className="container">
      <h1 className="title">Friend Request</h1>
      <button className="send-button" onClick={sendFriendRequest} disabled={isSending}>
        {isSending ? "Sending..." : "Send Friend Request"}
      </button>
      {isSending && <p className="countdown">Time left: {countdown}s</p>}
      {isSent && <p className="success">Friend Request Sent!</p>}
    </div>
  );
};

export default App;
