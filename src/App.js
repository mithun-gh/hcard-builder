import React from "react";

import { Container, InputSection } from "./App.style";
import { Button, Subtitle, TextBox, Title } from "./ui-components";

function App() {
  return (
    <>
      <Container>
        <InputSection>
          <Title>hCard Builder</Title>
          <Subtitle>Personal Details</Subtitle>
          <TextBox label="Given Name"></TextBox>
          <TextBox label="Surname"></TextBox>
          <TextBox label="Email"></TextBox>
          <TextBox label="Phone"></TextBox>
          <Subtitle>Address</Subtitle>
          <TextBox label="House Name or #"></TextBox>
          <TextBox label="Street"></TextBox>
          <TextBox label="Suburb"></TextBox>
          <TextBox label="State"></TextBox>
          <TextBox label="Postcode"></TextBox>
          <TextBox label="Country"></TextBox>
          <Button>Upload Avatar</Button>
          <Button primary>Create hCard</Button>
        </InputSection>
      </Container>
    </>
  );
}

export default App;
