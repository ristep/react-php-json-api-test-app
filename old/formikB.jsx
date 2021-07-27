import React from 'react';
import { Form, Row, InputGroup, Col, Button } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';

function FormikB(props) {
  const userNameValidation = () => yup.string().required('Username is required');

  const schema = yup.object().shape({
    first_name: yup.string().required(),
    second_Name: yup.string().required(),
    name: userNameValidation(),
    place: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    email: yup.string().required().email(),
  });
  
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={props.values} 
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">

          <Form.Group as={Col} md="4" controlId="userName">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                isValid={touched.first_name && !errors.first_name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="second_name"
                value={values.second_name}
                onChange={handleChange}
                isValid={touched.second_name && !errors.second_name}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="email">
              <Form.Label>e-mail</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="e-mail"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="place">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="place"
                value={values.place}
                onChange={handleChange}
                isInvalid={!!errors.place}
              />

              <Form.Control.Feedback type="invalid">
                {errors.place}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="zipcode">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikB;