import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const wordCounter = (str) => {
    return str.split(/\s+/).filter((element) => {
      return element.length !== 0;
    }).length;
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  function capitalizeIthCharacter(inputString, i) {
    if (i < 0 || i >= inputString.length) {
      props.showAlert("Invalid index!", "danger");
      return inputString;
    }
    return (
      inputString.substring(0, i) +
      inputString[i].toUpperCase() +
      inputString.substring(i + 1)
    );
  }
  const handleCapitalClick = () => {
    setText(text.toLowerCase());
    console.log(text);
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = capitalizeIthCharacter(newText[i], 0);
    }
    setText(newText.join(" "));
    props.showAlert("Text Capitalized!", "success");
  };

  function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      props.showAlert("Unable to copy to clipboard!", "danger");
    }
    document.body.removeChild(textArea);
  }
  const handleCopyClick = () => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      unsecuredCopyToClipboard(text);
    }
    props.showAlert("Text Copied to clipboard!", "success");
  };
  const handleSpeakClick = () => {
    // Check if the SpeechSynthesis API is available in the browser
    if ("speechSynthesis" in window) {
      // Function to speak the provided text
      function speak(text) {
        // Create a SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(text);

        // Use the default speech synthesis voice
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices[0];

        // Speak the text
        window.speechSynthesis.speak(utterance);
      }

      speak(text);
    } else {
      console.error("Speech synthesis not supported in this browser");
    }
    props.showAlert("Text spoken!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space!", "success");
  };

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>
          Capitalize
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy to clipboard
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSpeakClick}>
          Speak
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {wordCounter(text)} words and {text.length} characters
        </p>
        <p>{0.008 * wordCounter(text)} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
