import React from "react";
import { useField } from "formik";
import styled from "styled-components";

function TextBoxComponent({ label, className, errors, ...props }) {
  const [field] = useField(props.name);
  return (
    <>
      <div className={className}>
        <label>{label}</label>
        <input type="text" {...field} className={errors ? "error" : ""}></input>
        <div className="errors">{errors}</div>
      </div>
    </>
  );
}

export const TextBox = styled(TextBoxComponent).attrs(() => ({ className: "text-box" }))`
  width: 190px;

  .errors {
    color: red;
    font-size: 10px;
    margin-top: 2px;
  }

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

    &.error {
      border: solid 1px red;
    }

    &:focus {
      border-color: #2980b9;
    }
  }
`;
