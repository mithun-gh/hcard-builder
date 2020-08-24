import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, InputSection, PreviewSection } from "./App.style";
import { Button, FileInput, Subtitle, TextBox, Title } from "./ui-components";

import HCard from "./components/HCard";

const HCardSchema = Yup.object().shape({
  givenName: Yup.string().min(2, "Too short!").max(12, "Too long!").required("Required"),
  surname: Yup.string().min(2, "Too short!").max(12, "Too long!").required("Required"),
  email: Yup.string().email("Invalid email"),
  phone: Yup.number().positive().integer(),
});

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
  photo: "default.png",
};

function App() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={HCardSchema}
        onSubmit={(_, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <Container>
              <InputSection>
                <Title>hCard Builder</Title>
                <Subtitle>Personal Details</Subtitle>
                <TextBox
                  name="givenName"
                  label="Given Name"
                  errors={touched.givenName ? errors.givenName : ""}
                />
                <TextBox
                  name="surname"
                  label="Surname"
                  errors={touched.surname ? errors.surname : ""}
                />
                <TextBox name="email" label="Email" errors={touched.email ? errors.email : ""} />
                <TextBox name="phone" label="Phone" errors={touched.phone ? errors.phone : ""} />
                <Subtitle>Address</Subtitle>
                <TextBox name="houseName" label="House Name or #" />
                <TextBox name="street" label="Street" />
                <TextBox name="suburb" label="Suburb" />
                <TextBox name="state" label="State" />
                <TextBox name="postcode" label="Postcode" />
                <TextBox name="country" label="Country" />
                <FileInput name="photo" text="Upload Avatar"></FileInput>
                <Button type="submit" primary disabled={isSubmitting}>
                  Create hCard
                </Button>
              </InputSection>
              <PreviewSection>
                <HCard title="hCard Preview" details={values} />
              </PreviewSection>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
