import React from "react";
import { Formik, Form } from "formik";

import { Container, InputSection, PreviewSection } from "./App.style";
import { Button, Subtitle, TextBox, Title } from "./ui-components";

import HCard from "./components/HCard";

const initialValues = {
  givenName: "",
  surname: "",
  email: "",
  phone: "",
  houseName: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "",
};

function App() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(_, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Container>
              <InputSection>
                <Title>hCard Builder</Title>
                <Subtitle>Personal Details</Subtitle>
                <TextBox name="givenName" label="Given Name" />
                <TextBox name="surname" label="Surname" />
                <TextBox name="email" label="Email" />
                <TextBox name="phone" label="Phone" />
                <Subtitle>Address</Subtitle>
                <TextBox name="houseName" label="House Name or #" />
                <TextBox name="street" label="Street" />
                <TextBox name="suburb" label="Suburb" />
                <TextBox name="state" label="State" />
                <TextBox name="postcode" label="Postcode" />
                <TextBox name="country" label="Country" />
                <Button>Upload Avatar</Button>
                <Button type="submit" primary disabled={isSubmitting}>
                  Create hCard
                </Button>
              </InputSection>
              <PreviewSection>
                <HCard details={values} />
              </PreviewSection>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
