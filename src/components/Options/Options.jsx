import React from "react";

import  "./Options.css";
const Options = (props) => {
  const options = [
    {text: "JavaScript", handler: props.actionProvider.handleJavascriptList, id: 1 },
    {text: "Data Visualization", handler: ()=> {},id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview Prep", handler: () => {}, id: 5 },
  ];


  const optionsMarkup = options.map((option) => (
    <button  className = "option-button"  key={option.id}  onClick={option.handler}>
    {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};
export default Options;
