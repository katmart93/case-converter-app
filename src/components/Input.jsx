import React from "react";

export default function Input({ text, setText, fontSize, fontStyle }) {
  return (
    <div className="input">
      <textarea
        autoFocus
        name="text"
        placeholder="Type or paste your text here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        style={{ fontSize: `${fontSize}`, fontFamily: `${fontStyle}` }}
      ></textarea>
    </div>
  );
}
