// import "./form.scss";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import useValiHook from "../../hooks/formValidation";
import Axios from "Axios";

import * as yup from "yup";
import ReactJson from "react-json-view";

import "./index.scss";

let valSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const getUserTokenQuery = (username, password) => ({
  getToken: {
    username: username,
    password: password,
  },
});

const LoginForm = (props) => {
  const {loginState, setLoginState} = props.userModel;
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { onBlur, validate, errors } = useValiHook({ valSchema, formData });

  const getKey = (e) => {
    e.preventDefault();
    (async () => {
      setLoginState({});
      await Axios.post(
        "",
        getUserTokenQuery(formData.username, formData.password)
      )
        .then((ret) => {
          setLoginState({
            ...ret.data,
            status: ret.status,
            statusText: ret.statusText,
            error: false,
          });
        })
        .catch((err) => {
          setLoginState({
            data:{},
            status: 204,
            statusText: "Data base error!!",
            error: true,
            errorNo: err.error,
            errMessage: err.message,
            name: err.name,
            config: err.config,
          });
        });
    })();
    //    setUserdata(getUserTokenQuery(username, password));
  };

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <Container id="login-box" >
      <Card>
        <Card.Title>
          <Row>
            <Col className="md-12">
              <div id="login-box-title">User login</div>
            </Col>
          </Row>
        </Card.Title>
        <Card.Body>
          <Form className="p-2 bg-light" size="sm">
            <Form.Group>
              <Form.Label>User name:</Form.Label>
              <Form.Control
                size="sm"
                name="username"
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
                size="sm"
                name="password"
                type="text"
                placeholder="Password"
                value={formData?.password || ""}
                onChange={onChange}
                onBlur={onBlur}
                className={errors?.password ? "is-invalid" : ""}
              />
              <Form.Label className="invalid-feedback">
                {errors?.password}
              </Form.Label>
            </Form.Group>
          </Form>
        </Card.Body>

        <Card.Footer>
          <Row>
            <Col className="md-4">
            </Col>  
            <Col className="md-4">
              <Button variant="primary" onClick={getKey} id="submitButton">
                Submit
              </Button>
            </Col>
            <Col className="md-4">
            </Col>  
          </Row>
        </Card.Footer>
      </Card>

      <ReactJson src={loginState} />
    </Container>
  );
};

export default LoginForm;
