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
    setText(text.toLowerCase);
  };

  return (
    <div className="App">
      <Title />
      <Options setToLowerCase={setToLowerCase} />
      <Input text={text} setText={setText} />
    </div>
  );
}

export default App;
