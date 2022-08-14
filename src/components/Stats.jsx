import React from "react";

export default function Stats({ charCount }) {
  return (
    <div className="stats">
      <span>Character count: {charCount}</span>
      <span>Word count:</span>
    </div>
  );
}
