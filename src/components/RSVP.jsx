import React, { useState } from 'react';

function RSVP() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // RSVP 제출 로직 구현
    console.log('RSVP 제출:', { name, attending });
  };

  return (
    <div className="rsvp">
      <h2>참석 여부</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
        />
        <label>
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
          />
          참석합니다
        </label>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default RSVP;