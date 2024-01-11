import React from "react";

export default function About(props) {
  return (
    <div
      className={`container`}
      style={{
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "light" ? "white" : "black",
      }}
    >
      <h1 className="my-3">About us</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          color: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "light" ? "white" : "black",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#212529",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#212529",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "white" : "#212529",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
