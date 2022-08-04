import React from "react";

export default function Options({ setToLowerCase }) {
  return (
    <div className="options">
      <button>lower case</button>
      <button>UPPER CASE</button>
      <button>Capitalized Case</button>
      <button>aLtErNaTiNg cAsE</button>
      <button>Sentence case</button>
      <button>Title Case</button>
      <button>Copy to clipboard</button>
    </div>
  );
}
