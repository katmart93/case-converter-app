// components
import Title from "./components/Title";
import Options from "./components/Options";
import Input from "./components/Input";

//styles
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

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

  return (
    <div className="App">
      <Title />
      <Options
        setToLowerCase={setToLowerCase}
        setToUpperCase={setToUpperCase}
        setToCapitalizedCase={setToCapitalizedCase}
      />
      <Input text={text} setText={setText} />
    </div>
  );
}

export default App;
