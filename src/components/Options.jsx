import CopyToClipboard from "react-copy-to-clipboard";

export default function Options({
  setToLowerCase,
  setToUpperCase,
  setToCapitalizedCase,
  setSentenceCase,
  setAlternatingCase,
  titleCase,
  text,
  textCopied,
  setTextCopied,
}) {
  setTimeout(() => {
    setTextCopied(false);
  }, 4000);

  return (
    <div className="options">
      <button onClick={setToLowerCase}>lower case</button>
      <button onClick={setToUpperCase}>UPPER CASE</button>
      <button onClick={setToCapitalizedCase}>Capitalized Case</button>
      <button onClick={setAlternatingCase}>aLtErNaTiNg cAsE</button>
      <button onClick={setSentenceCase}>Sentence case</button>
      <button onClick={titleCase}>Title Case</button>
      <CopyToClipboard text={text} onCopy={() => setTextCopied(true)}>
        <button>{textCopied ? "Copied" : "Copy to clipboard"}</button>
      </CopyToClipboard>
    </div>
  );
}
