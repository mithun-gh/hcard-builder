import React from "react";
import styled from "styled-components";

function HCardComponent({ details }) {
  return <>{details.givenName}</>;
}

const HCard = styled(HCardComponent)`
  font-weight: bold;
`;

export default HCard;
