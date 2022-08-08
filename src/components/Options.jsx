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
}) {
  setTimeout(() => {
    setTextCopied(false);
  }, 4000);

  return (
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
  );
}
