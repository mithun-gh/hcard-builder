import styled from "styled-components";

const Button = styled.button`
  height: 48px;
  min-width: 190px;
  padding: 12px 28px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  border-bottom: 2px solid #00000080;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#3498db" : "#627b8b")};

  &:hover {
    filter: brightness(0.9);
  }
`;

export default Button;
