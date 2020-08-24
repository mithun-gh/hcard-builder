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
      <div className="body">
        <div class="row">
          <div class="col">
            <span class="label">Email</span>
            <span class="text">{details.email}</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="label">Phone</span>
            <span class="text">{details.phone}</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="label">Address</span>
            <span class="text">
              {details.houseName} {details.street}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="label"></span>
            <span class="text">
              {details.suburb} {details.state}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="label">Postcode</span>
            <span class="text">{details.postcode}</span>
          </div>
          <div class="col">
            <span class="label">Country</span>
            <span class="text">{details.country}</span>
          </div>
        </div>
      </div>
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
    height: 210px;
    padding: 32px 24px;
    background-color: #fff;
    border-bottom: 2px solid #00000080;
  }

  .label {
    display: inline-block;
    width: 70px;
    font-size: 10px;
    color: #34495e;
    text-transform: uppercase;
  }

  .text {
    font-size: 16px;
    font-family: Merriweather;
  }

  .row {
    display: flex;
    border-bottom: 1px solid #e4e8e9;
    margin-bottom: 14px;
  }

  .col {
    flex: 1;
  }
`;

export default HCard;
