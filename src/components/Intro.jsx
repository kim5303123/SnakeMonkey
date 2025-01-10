import React from "react";

const introStyles = {
  padding: "30px",
  textAlign: "center",
};

function Intro() {
  return (
    <div style={introStyles}>
      <h2 style={{ color: "#4a4a4a" }}>신랑 & 신부 소개</h2>
      <p>저희의 소중한 날에 초대합니다.</p>
      <div>
        <div>
          <h3>신랑 홍길동</h3>
          <p>홍부장님 & 김여사님의 장남</p>
        </div>
        <div>
          <h3>신부 김말숙</h3>
          <p>김사장님 & 이여사님의 차녀</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
