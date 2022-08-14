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
  setFontStyle,
}) {
  setTimeout(() => {
    setTextCopied(false);
  }, 4000);

  return (
    <>
      <div className="font-size-selector">
        <label htmlFor="font-size">Font size:</label>
        <select name="font-size" onChange={(e) => setFontSize(e.target.value)}>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="20px">20</option>
          <option value="24px">24</option>
          <option value="26px">26</option>
          <option value="28px">28</option>
          <option value="30px">30</option>
        </select>
      </div>
      <div className="font-style-selector">
        <label htmlFor="font-style">Font style:</label>
        <select
          name="font-style"
          onChange={(e) => setFontStyle(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a font...
          </option>
          <option value="Anton">Anton</option>
          <option value="Arial">Arial</option>
          <option value="Bebas Neue">Bebas Neue</option>
          <option value="BhuTuka Expanded One">BhuTuka Expanded One</option>
          <option value="Caveat">Caveat</option>
          <option value="Cinzel">Cinzel</option>
          <option value="Inspiration">Inspiration</option>
          <option value="Lobster">Lobster</option>
          <option value="Oleo Script Swash Caps">Oleo Script Swash Caps</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Play">Play</option>
          <option value="Playfair Display">Playfair Display</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
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
    </>
  );
}
