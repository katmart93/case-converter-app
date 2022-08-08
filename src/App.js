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

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const capitalizedCase = () => {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const alternatingCase = () => {
    setText(
      text
        .toLowerCase()
        .split("")
        .map((char, idx) => (idx % 2 === 0 ? char : char.toUpperCase()))
        .join("")
    );
  };

  const inverseCase = () => {
    setText(
      text
        .toLowerCase()
        .split("")
        .map((char, idx) => (idx % 2 ? char : char.toUpperCase()))
        .join("")
    );
  };

  const sentenceCase = () => {
    setText(
      text
        .toLowerCase()
        .split(".")
        .map((sentence) => sentence.trim())
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ")
    );
  };

  const titleCase = () => {
    const exceptions = [
      "and",
      "for",
      "of",
      "but",
      "neither",
      "nor",
      "either",
      "or",
      "yet",
      "so",
      "on",
      "in",
      "the",
      "a",
      "an",
    ];

    let textArr = text
      .toLowerCase()
      .split(".")
      .map((sentence) => sentence.trim())
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ")
      .toString()
      .split(" ")
      .map((word) => {
        for (const exception of exceptions) {
          if (word === exception) {
            return word.toLowerCase();
          }
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    console.log("from the function:", textArr);
    setText(textArr);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="App">
      <Title />
      <Options
        lowerCase={lowerCase}
        upperCase={upperCase}
        capitalizedCase={capitalizedCase}
        sentenceCase={sentenceCase}
        alternatingCase={alternatingCase}
        inverseCase={inverseCase}
        titleCase={titleCase}
        text={text}
        textCopied={textCopied}
        setTextCopied={setTextCopied}
        handleClear={handleClear}
      />
      <Input text={text} setText={setText} />
    </div>
  );
}

export default App;
