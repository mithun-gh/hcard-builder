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

export const TextBox = styled(TextBoxComponent).attrs(() => ({ className: "text-box" }))`
  width: 190px;

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
    width: 100%;
    height: 35px;
    padding: 8px 10px;
    border-radius: 4px;
    border: solid 1px #c3c4c3;

    &:focus {
      border-color: #2980b9;
    }
  }
`;
