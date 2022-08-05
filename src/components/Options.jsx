import React from "react";

export default function Options({
  setToLowerCase,
  setToUpperCase,
  setToCapitalizedCase,
  setSentenceCase,
}) {
  return (
    <div className="options">
      <button onClick={setToLowerCase}>lower case</button>
      <button onClick={setToUpperCase}>UPPER CASE</button>
      <button onClick={setToCapitalizedCase}>Capitalized Case</button>
      <button>aLtErNaTiNg cAsE</button>
      <button onClick={setSentenceCase}>Sentence case</button>
      <button>Title Case</button>
      <button>Copy to clipboard</button>
    </div>
  );
}
