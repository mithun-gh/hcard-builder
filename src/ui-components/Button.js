import styled from "styled-components";

export const Button = styled.button.attrs(({ type }) => ({ type, className: "button" }))`
  height: 48px;
  min-width: 190px;
  padding: 12px 28px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  border-bottom: 2px solid #00000080;
  color: #fff;
  text-align: center;
  background-color: ${(props) =>
    props.primary ? "var(--primary-color)" : "var(--secondary-color)"};

  &:hover {
    filter: brightness(0.9);
  }
`;
