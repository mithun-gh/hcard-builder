import React from "react";
import styled from "styled-components";

function HCardComponent({ details, className }) {
  return (
    <div className={"vcard " + className ?? ""}>
      <div className="header">
        <h4 className="fn">
          {details.givenName} {details.surname}
        </h4>
        <img className="photo" src={details.photo ?? "default.png"} alt="photograph" />
      </div>
      <div className="body">
        <div className="row">
          <div className="col">
            <span className="prop">Email</span>
            <span className="email text">{details.email}</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="prop">Phone</span>
            <span className="tel text">{details.phone}</span>
          </div>
        </div>
        <div className="adr">
          <div className="row">
            <div className="col">
              <span className="prop">Address</span>
              <span className="text">
                <span className="post-office-box">{details.houseName}&nbsp;</span>
                <span className="street-address">{details.street}</span>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="prop"></span>
              <span className="text">
                <span className="locality">{details.suburb}&nbsp;</span>
                <span className="region">{details.state}</span>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="prop">Postcode</span>
              <span className="postal-code text">{details.postcode}</span>
            </div>
            <div className="col">
              <span className="prop">Country</span>
              <span className="country-name text">{details.country}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HCard = styled(HCardComponent)`
  width: 430px;
  height: 300px;
  position: absolute;

  .header {
    height: 100px;
    padding: 24px 56px 24px 20px;
    color: #fff;
    font-family: Merriweather;
    font-size: 24px;
    font-weight: bold;
    background-color: #2c3e50;
  }

  .photo {
    position: absolute;
    top: 12px;
    right: 24px;
    width: 84px;
    height: 104px;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0 rgba(154, 154, 154, 0.75);
  }

  .body {
    height: 210px;
    padding: 32px 24px;
    background-color: #fff;
    border-bottom: 2px solid #00000080;
  }

  .prop {
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
