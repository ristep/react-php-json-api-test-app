import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import ReactJson from "react-json-view";

const RegisterUser = () => {
  const [ formData, setFormData ] = useState({})

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
      <Container  id="login-box">
        <Card>
          <Card.Header>
            <h5>Registration of a new user!</h5>
          </Card.Header>
          <Card.Body>
          <Form className="p-2 bg-light" size="sm" autocomplete="off">
                <Form.Group>
                  <Form.Label>e-mail</Form.Label>
                  <Form.Control
                    type="email"
                    size="sm"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={onChange}
                  />  
                  <Form.Label>User name:</Form.Label>
                  <Form.Control
                    size="sm"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="User name"
                    value={formData?.username}
                    onChange={onChange}
                    // onBlur={onBlur}
                    // className={errors?.username ? "is-invalid" : ""}
                  />
                  <Form.Label className="invalid-feedback">
                    {/* {errors?.username} */}
                  </Form.Label>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    size="sm"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData?.password || ""}
                    onChange={onChange}
                    // onBlur={onBlur}
                    // className={errors?.password ? "is-invalid" : ""}
                  />
                  <Form.Label className="invalid-feedback">
                    {/* {errors?.password} */}
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
                  type="submit"
                  id="submitButton"
                >
                  Send invitation e-mail
                </Button>
              </Col>
              <Col className="md-4"></Col>
            </Row>
          </Card.Footer>
        </Card>
        <ReactJson src={formData} />
      </Container>
  );
};

export default RegisterUser;
