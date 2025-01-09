import React from "react";
import { Link } from "react-router-dom";

function Cover() {
  return (
    <div className="cover">
      <h1>제목</h1>
      <p>2025년 5월 4일</p>
      <Link to="/intro">입장하기</Link>
    </div>
  );
}
export default Cover;
