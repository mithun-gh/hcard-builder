import React from "react";
import styled from "styled-components";

function HCardComponent({ details, className }) {
  return (
    <div className={"vcard " + className ?? ""}>
      <div className="header">
        <h4 className="fn">
          {details.givenName} {details.surname}
        </h4>
      </div>
      <div className="body"></div>
    </div>
  );
}

const HCard = styled(HCardComponent)`
  width: 430px;
  height: 300px;

  .header {
    height: 100px;
    padding: 24px 56px 24px 20px;
    color: #fff;
    font-family: Merriweather;
    font-size: 24px;
    font-weight: bold;
    background-color: #2c3e50;
  }

  .body {
    height: 200px;
    background-color: #fff;
    border-bottom: 2px solid #00000080;
  }
`;

export default HCard;
