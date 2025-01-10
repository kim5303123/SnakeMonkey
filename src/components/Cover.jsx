import React from "react";
import { Link } from "react-router-dom";

const coverStyles = {
  textAlign: "center",
  padding: "50px 0",
  backgroundImage: "url('path/to/your/background-image.jpg')",
  backgroundSize: "cover",
  color: "#fff",
};

const h1Styles = {
  fontSize: "2.5em",
  marginBottom: "20px",
};

const pStyles = {
  fontSize: "1.2em",
  marginBottom: "30px",
};

const linkStyles = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#fff",
  color: "#333",
  textDecoration: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s",
};

const hoverLinkStyles = {
  backgroundColor: "#f0f0f0",
};

function Cover() {
  return (
    <div style={coverStyles}>
      <h1 style={h1Styles}>우리의 결혼식에 초대합니다</h1>
      <p style={pStyles}>2025년 5월 4일</p>
      <Link to="/intro" style={linkStyles}>
        입장하기
      </Link>
    </div>
  );
}

export default Cover;
