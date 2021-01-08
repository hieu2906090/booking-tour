import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  Input,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import "../assets/css/PaperLogin.css";
import * as actions from "../redux/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [state, setState] = useState("");

  function sumbitHandler(e) {
    // e.preventDefault();
    props.onAuth(state.email, state.password);
  }

  function handleChange(e) {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to="/admin"></Redirect>;
  }

  return (
    <div className="full-page section-image">
      {authRedirect}
      <div className="content">
        <Row>
          <Col
            md="4"
            lg="3"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h3" className="text-center">
                  ĐĂNG NHẬP
                </CardTitle>
              </CardHeader>
              <hr />
              <CardBody>
                <Form onSubmit={sumbitHandler}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onChange={handleChange}
                            name="email"
                            value={state.email}
                            placeholder="Nhập Email"
                            type="text"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-key-25"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onChange={handleChange}
                            name="password"
                            value={state.password}
                            placeholder="Nhập Mật Khẩu"
                            type="password"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="update ml-auto mr-auto">
                        <Button
                          onClick={sumbitHandler}
                          className="btn-round"
                          color="warning"
                          block
                        >
                          Đăng Nhập
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <hr></hr>
              <CardFooter>
                <Row>
                  <Col>
                    <p style={{ color: "red" }}>{props.error}</p>
                    {props.loading ? <Spinner color="primary"></Spinner> : null}
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <div className="full-page-background"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.userId !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
