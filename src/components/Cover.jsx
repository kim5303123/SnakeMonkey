import React from 'react';
import { Link } from 'react-router-dom';

function Cover() {
  return (
    <div className="cover">
      <h1>우리 결혼합니다</h1>
      <p>2025년 1월 9일</p>
      <Link to="/intro">입장하기</Link>
    </div>
  );
}
export default Cover;