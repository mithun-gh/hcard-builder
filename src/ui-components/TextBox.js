import React from "react";
import styled from "styled-components";

function TextBoxComponent({ label, className }) {
  return (
    <>
      <div className={className}>
        <label>{label}</label>
        <input type="text"></input>
      </div>
    </>
  );
}

const TextBox = styled(TextBoxComponent)`
  label {
    display: block;
    margin-bottom: 4px;
    color: #2c3e50;
    font-size: 12px;
    text-transform: uppercase;
  }

  input[type="text"] {
    font-size: 16px;
    font-family: Merriweather;
    height: 35px;
    min-width: 190px;
    padding: 8px 10px;
    border-radius: 4px;
    border: solid 1px #c3c4c3;

    &:focus {
      border-color: #2980b9;
    }
  }
`;

export default TextBox;
