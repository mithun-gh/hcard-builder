import styled from "styled-components";

export const Subtitle = styled.h6.attrs(() => ({ className: "subtitle" }))`
  color: var(--secondary-text-color);
  font-size: 10px;
  text-transform: uppercase;
  padding-bottom: 2px;
  border-bottom: solid 1px var(--secondary-text-color);
`;
