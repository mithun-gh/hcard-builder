import React from "react";
import styled from "styled-components";

function InputFileComponent({ text, className }) {
  return (
    <div className={className}>
      <input type="file" id="file" />
      <label htmlFor="file">{text}</label>
    </div>
  );
}

export const FileInput = styled(InputFileComponent).attrs(() => ({ className: "button" }))`
  position: relative;

  [type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type="file"] + label {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "Upload";
    padding: 12px 28px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    border-bottom: 2px solid #00000080;
    color: #fff;
    outline: none;
    background-color: var(--secondary-color);
    -webkit-user-select: none;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
