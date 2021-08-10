import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import useValiHook from "hooks/formValidation";
import ReactJson from "react-json-view";
import "../../styles/userForm.scss";

const valNewUserSchema = yup.object().shape({
  email: yup.string().required("E-mail is required!").email("Enter valid email address!"),
  username: yup.string().required("User name is a required field!"),
  passwordA: yup.string().required("Password is a required field!"),
  passwordB: yup.string().required("Password is a required field!"),
});

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    passwordA: "",
    passwordB: "",
  });
  const { onBlur, validate, errors } = useValiHook({   valSchema: valNewUserSchema, formData  });

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const sendMailHandler = () => {
    validate();
  };

  return (
    <Container id="login-box">
      <Card>
        <Card.Header>
          <div id="login-box-title">Registration of a new user!</div>
        </Card.Header>
        <Card.Body>
          <Form className="p-2 bg-light" size="sm" autoComplete="off">
            <Form.Group>
              <Form.Label>e-mail</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="text"
                size="sm"
                autoComplete="off"
                placeholder="Enter your email"
                value={formData?.email}
                onChange={onChange}
                onBlur={onBlur}
                className={errors?.email ? "is-invalid" : ""}
              />
              <Form.Label className="invalid-feedback">
                {errors?.email}
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>User name:</Form.Label>
              <Form.Control
                id="username"
                name="username"
                autoComplete="off"
                size="sm"
                type="text"
                placeholder="User name"
                value={formData?.username}
                onChange={onChange}
                onBlur={onBlur}
                className={errors?.username ? "is-invalid" : ""}
              />
              <Form.Label className="invalid-feedback">
                {errors?.username}
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                id="passwordA"
                name="passwordA"
                autoComplete="off"
                size="sm"
                type="password"
                placeholder="Password"
                value={formData?.passwordA || ""}
                onChange={onChange}
                onBlur={onBlur}
                className={errors?.passwordA ? "is-invalid" : ""}
              />
              <Form.Label className="invalid-feedback">
                {errors?.passwordA}
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password again:</Form.Label>
              <Form.Control
                id="passwordB"
                name="passwordB"
                autoComplete="off"
                size="sm"
                type="password"
                placeholder="Password"
                value={formData?.passwordB || ""}
                onChange={onChange}
                onBlur={onBlur}
                className={errors?.passwordB ? "is-invalid" : ""}
              />
              <Form.Label className="invalid-feedback">
                {errors?.passwordB}
              </Form.Label>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col className="md-4"></Col>
            <Col className="md-4">
              <Button
                variant="primary"
                id="sendMail"
                onClick={sendMailHandler}
              >
                Send invitation e-mail
              </Button>
            </Col>
            <Col className="md-4">
            {/* <Button size="sm" variant="primary" onClick={validate}>
                validate
            </Button> */}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <ReactJson src={formData} />
      <ReactJson src={errors} />
    </Container>
  );
};

export default RegisterUser;
