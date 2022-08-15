import React from "react";

export default function Stats({ charCount, wordCount, sentenceCount }) {
  return (
    <div className="stats">
      <span>Character count: {charCount}</span>
      <span>Word count: {wordCount}</span>
      <span>Sentence count: {sentenceCount}</span>
    </div>
  );
}
