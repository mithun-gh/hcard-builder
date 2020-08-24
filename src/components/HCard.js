import React from "react";
import styled from "styled-components";

function HCardComponent({ details }) {
  return <>{details.name}</>;
}

const HCard = styled(HCardComponent)`
  font-weight: bold;
`;

export default HCard;
