import React from "react";

export default function Input({ text, setText, fontSize }) {
  return (
    <div className="input">
      <textarea
        name="text"
        cols="100"
        rows="10"
        placeholder="Type or paste your text here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        style={{ fontSize: `${fontSize}` }}
      ></textarea>
    </div>
  );
}
