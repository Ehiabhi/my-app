import React from "react";

function Button(props) {
  return (
    <button onClick={props.setNextQuestion} id={props.id} value={props.option}>
      {props.option}
    </button>
  );
}

export default Button;
