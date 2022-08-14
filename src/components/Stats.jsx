import React from "react";

export default function Stats({ charCount, wordCount }) {
  return (
    <div className="stats">
      <span>Character count: {charCount}</span>
      <span>Word count: {wordCount}</span>
    </div>
  );
}
