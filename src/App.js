// components
import Title from "./components/Title";
import Options from "./components/Options";
import Input from "./components/Input";

//styles
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("16px");
  const [fontStyle, setFontStyle] = useState("");
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
        .trim()
    );
  };

  const alternatingCase = () => {
    setText(
      text
        .toLowerCase()
        .split("")
        .map((char, idx) => (idx % 2 === 0 ? char : char.toUpperCase()))
        .join("")
        .trim()
    );
  };

  const inverseCase = () => {
    setText(
      text
        .toLowerCase()
        .split("")
        .map((char, idx) => (idx % 2 ? char : char.toUpperCase()))
        .join("")
        .trim()
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
        .trim()
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
      .join(" ")
      .trim();
    setText(textArr);
  };

  return (
    <div className="App">
      <Title />
      <div className="wrapper">
        <Options
          lowerCase={lowerCase}
          upperCase={upperCase}
          capitalizedCase={capitalizedCase}
          sentenceCase={sentenceCase}
          alternatingCase={alternatingCase}
          inverseCase={inverseCase}
          titleCase={titleCase}
          text={text}
          setText={setText}
          textCopied={textCopied}
          setTextCopied={setTextCopied}
          setFontSize={setFontSize}
          setFontStyle={setFontStyle}
        />
        <Input
          text={text}
          setText={setText}
          fontSize={fontSize}
          fontStyle={fontStyle}
        />
      </div>
    </div>
  );
}

export default App;
