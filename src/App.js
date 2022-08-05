// components
import Title from "./components/Title";
import Options from "./components/Options";
import Input from "./components/Input";

//styles
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [textCopied, setTextCopied] = useState(false);

  console.log(text);

  const setToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const setToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const setToCapitalizedCase = () => {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const setAlternatingCase = () => {
    setText(
      text
        .toLowerCase()
        .split("")
        .map((char, idx) => (idx % 2 === 0 ? char : char.toUpperCase()))
        .join("")
    );
  };

  const setSentenceCase = () => {
    setText(
      text
        .toLowerCase()
        .split(".")
        .map((sentence) => sentence.trim())
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ")
    );
  };

  return (
    <div className="App">
      <Title />
      <Options
        setToLowerCase={setToLowerCase}
        setToUpperCase={setToUpperCase}
        setToCapitalizedCase={setToCapitalizedCase}
        setSentenceCase={setSentenceCase}
        setAlternatingCase={setAlternatingCase}
        text={text}
        textCopied={textCopied}
        setTextCopied={setTextCopied}
      />
      <Input text={text} setText={setText} />
    </div>
  );
}

export default App;
