import CopyToClipboard from "react-copy-to-clipboard";

export default function Options({
  lowerCase,
  upperCase,
  capitalizedCase,
  sentenceCase,
  alternatingCase,
  inverseCase,
  titleCase,
  text,
  setText,
  textCopied,
  setTextCopied,
  setFontSize,
}) {
  setTimeout(() => {
    setTextCopied(false);
  }, 4000);

  return (
    <>
      <div className="options">
        <button onClick={lowerCase}>lower case</button>
        <button onClick={upperCase}>UPPER CASE</button>
        <button onClick={capitalizedCase}>Capitalized Case</button>
        <button onClick={alternatingCase}>aLtErNaTiNg cAsE</button>
        <button onClick={inverseCase}>InVeRsE CaSe</button>
        <button onClick={sentenceCase}>Sentence case</button>
        <button onClick={titleCase}>Title Case</button>
        <CopyToClipboard text={text} onCopy={() => setTextCopied(true)}>
          <button>{textCopied ? "Copied" : "Copy to clipboard"}</button>
        </CopyToClipboard>
        <button onClick={() => setText("")}>Clear</button>
      </div>
      <div className="font-size">
        <label htmlFor="font">Font size:</label>
        <select name="font" onChange={(e) => setFontSize(e.target.value)}>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="20px">20</option>
          <option value="24px">24</option>
          <option value="26px">26</option>
          <option value="28px">28</option>
          <option value="30px">30</option>
        </select>
      </div>
    </>
  );
}
