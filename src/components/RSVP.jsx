import React, { useState } from "react";

const rsvpStyles = {
  margin: "30px 0",
};

const formGroupStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputStyles = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
};

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color .3s",
};

function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("참석 여부가 성공적으로 제출되었습니다. 감사합니다!");
    setName("");
    setAttending(false);
    setMessage("");
  };

  return (
    <div style={rsvpStyles}>
      <h2 style={{ textAlign: "center", color: "#4a4a4a" }}>참석 여부</h2>
      <form onSubmit={handleSubmit} style={formGroupStyles}>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyles}
        />
        <label>
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
          />
          참석합니다
        </label>
        <label htmlFor="message">메시지 (선택사항):</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={inputStyles}
        ></textarea>
        <button type="submit" style={buttonStyles}>
          제출
        </button>
      </form>
    </div>
  );
}

export default RSVP;
