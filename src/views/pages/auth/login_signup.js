import React, { Component } from "react";
import { ComonIcons } from "../../../content/commonIcons";
import { history } from "../../../history";
import SignTab from "./signTabPanel";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
//import { history } from "../../../history";

import { loginApi, signUp } from "../../../redux/actions/api/apiAction";

import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";

class Animate extends Component {
  componentDidMount = () => {
    // if (localStorage.getItem('user')) {
    //   history.push("/setting/editaccount")
    // }
  };
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    // this.state = {
    //   signIn: false,
    // };

    this.toggleAnimate = this.toggleAnimate.bind(this);
  }
  toggleAnimate = (t) => {
    console.log(this.state.signIn);
    this.setState({ signIn: !t });
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab)
      this.setState({
        activeTab: tab,
        email: "",
        pass: "",
        loading: false,
      });
  };
  signIn = async () => {
    if (
      this.validator.fieldValid("email") &&
      this.validator.fieldValid("password")
    ) {
      await this.setState({ loading: true });

      const data = {
        email: this.state.email,
        password: this.state.pass,
      };
      await this.props.loginApi(data);
      await this.setState({ loading: false });
    } else {
      this.validator.showMessages();
    }
  };
  signUp = async () => {
    if (
      this.validator.fieldValid("email") &&
      this.validator.fieldValid("password") &&
      this.validator.fieldValid("phone") &&
      this.validator.fieldValid("fname") &&
      this.validator.fieldValid("lname")
    ) {
      await this.setState({ loading: true });

      const data = {
        email: this.state.email,
        password: this.state.pass,
        phone: this.state.phone,
        firstName: this.state.fname,
        lastName: this.state.lname,
        fullName: this.state.fname + " " + this.state.lname,
      };
      await this.props.signUp(data);
      await this.setState({ loading: false });
    } else {
      this.validator.showMessages();
    }
  };

  state = {
    email: "",
    pass: "",
    activeTab: "1",
    fname: "",
    lname: "",
    phone: "",
    loading: false,
  };

  setData = (name, val) => {
    this.setState({ [name]: val });
  };
  render() {
    return (
      <>
        <div className="comon-full-layout login-sign-up-section">
          <div
            className={` ${this.state.signIn
              ? "login-custom-container right-panel-active"
              : "login-custom-container "
              }`}
            id="container"
          >
            {/* <div className="form-container sign-up-container">
              <form action="#">signUp</form>
            </div> */}
            <div className="form-container sign-in-container">
              <form action="#">
                {" "}
                <div className="comon-block-1 text-left">
                  <div className="main-logo">
                    <img
                      src={require("../../../assets/images/logo.svg")}
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                  <div className="image-block">
                    <div>
                      {this.state.signIn ? (
                        <img
                          src={require("../../../assets/images/whatsBring-1.svg")}
                          className="img-fluid star-img "
                          alt="logo-image"
                        />
                      ) : (
                        <img
                          src={require("../../../assets/images/login-img.svg")}
                          className="img-fluid star-img"
                          alt="logo-image"
                        />
                      )}
                    </div>
                  </div>
                  <div className="footer">
                    <h4 className="des-tx-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </h4>
                  </div>
                </div>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <div className="comon-block-2 h-100 d-flex align-items-center justify-content-center">
                    <div className="login-block common-block-wrapper">
                      <Row className="flex-row ">
                        <Col md={12}>
                          <Nav tabs>
                            <NavItem>
                              <NavLink
                                onClick={() => {
                                  this.toggleAnimate(this.state.signIn);
                                  this.setData("activeTab", "1");
                                }}
                              >
                                Sign In
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink className="active">Sign up</NavLink>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>

                      <Form className="pt-3 mt-3 row flex-row text-left">
                        <Col lg={6}>
                          <FormGroup className="position-relative">
                            <Input
                              type="text"
                              name="first-name"
                              id="first-name"
                              placeholder="First Name"
                              className="with-icons"
                              value={this.state.fname}
                              onChange={(e) =>
                                this.setData("fname", e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor("fname")
                              }
                            />
                            <span className="absolute-icon">
                              {ComonIcons.user}
                            </span>
                            {this.state.activeTab === "2"
                              ? this.validator.message(
                                "fname",
                                this.state.fname,
                                "required",
                                { className: "text-danger" }
                              )
                              : null}
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
                          <FormGroup className="position-relative">
                            <Input
                              type="text"
                              name="last-name"
                              id="last-name"
                              placeholder="Last Name"
                              className="with-icons"
                              value={this.state.lname}
                              onChange={(e) =>
                                this.setData("lname", e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor("lname")
                              }
                            />
                            <span className="absolute-icon">
                              {ComonIcons.user}
                            </span>
                            {this.state.activeTab === "2"
                              ? this.validator.message(
                                "lname",
                                this.state.lname,
                                "required",
                                { className: "text-danger" }
                              )
                              : null}
                          </FormGroup>
                        </Col>
                        <Col lg={12}>
                          <FormGroup className="position-relative">
                            <Input
                              type="email"
                              name="email"
                              placeholder="Email Id"
                              className="with-icons"
                              value={this.state.email}
                              onChange={(e) =>
                                this.setData("email", e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor("email")
                              }
                            />
                            <span className="absolute-icon">
                              {ComonIcons.mailer}
                            </span>
                            {this.state.activeTab === "2"
                              ? this.validator.message(
                                "email",
                                this.state.email,
                                "required|email",
                                { className: "text-danger" }
                              )
                              : null}
                          </FormGroup>
                        </Col>
                        <Col lg={12}>
                          <FormGroup className="position-relative">
                            <Input
                              type="number"
                              name="telephone"
                              id="telephone"
                              placeholder="Telephone number"
                              className="with-icons"
                              value={this.state.phone}
                              onChange={(e) =>
                                this.setData("phone", e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor("phone")
                              }
                            />
                            <span className="absolute-icon">
                              {ComonIcons.lock}
                            </span>
                            {this.state.activeTab === "2"
                              ? this.validator.message(
                                "phone",
                                this.state.phone,
                                "required|phone",
                                { className: "text-danger" }
                              )
                              : null}
                          </FormGroup>
                        </Col>
                        <Col lg={12}>
                          <FormGroup className="position-relative">
                            <Input
                              type="password"
                              name="password"
                              id="telephone"
                              placeholder="6+ Characters Password"
                              className="with-icons"
                              value={this.state.pass}
                              onChange={(e) =>
                                this.setData("pass", e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor("password")
                              }
                            />
                            <span className="absolute-icon">
                              {ComonIcons.lock}
                            </span>
                            {this.state.activeTab === "2"
                              ? this.validator.message(
                                "password",
                                this.state.pass,
                                "required|min:7",
                                { className: "text-danger" }
                              )
                              : null}
                          </FormGroup>
                        </Col>
                        <Col lg={12}>
                          <div className="forget-password pt-3">
                            <label className="custom-container ">
                              I accept to receive{" "}
                              <span className="f-bold">
                                {" "}
                                emails from descry.
                              </span>
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="pt-3">
                            <button
                              type="button"
                              onClick={() => this.signUp()}
                              className="btn btn-custom-primary w-100"
                            >
                              Create account
                            </button>
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="border-block or-block-wrapper text-center">
                            <h4 className="or-block f-bold ">OR</h4>
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="pt-0">
                            <button className="btn btn-custom-google w-100">
                              <span className="h3">
                                <i className="fa fa-google"></i>{" "}
                              </span>
                              <span> sign up with google</span>
                            </button>
                          </div>
                        </Col>
                      </Form>
                    </div>{" "}
                  </div>
                </div>
                <div className="overlay-panel overlay-right">
                  <div className="comon-block-2 h-100 d-flex align-items-center justify-content-center">
                    <div className="login-block common-block-wrapper">
                      <Nav tabs>
                        <NavItem>
                          <NavLink className="active">Sign In</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              this.toggleAnimate(this.state.signIn);
                              this.setData("activeTab", "2");

                            }}
                          >
                            Sign up
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Row className="flex-row">
                        <Col sm="12" lg={12} md={12}>
                          <Form className="pt-3 mt-3 d-block text-left">
                            <FormGroup className="position-relative">
                              <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Email Id"
                                className="with-icons"
                                value={this.state.email}
                                onChange={(e) =>
                                  this.setData("email", e.target.value)
                                }
                                onBlur={() =>
                                  this.validator.showMessageFor("email")
                                }
                              />
                              <span className="absolute-icon">
                                {ComonIcons.mailer}
                              </span>
                              {this.state.activeTab === "1"
                                ? this.validator.message(
                                  "email",
                                  this.state.email,
                                  "required|email",
                                  { className: "text-danger" }
                                )
                                : null}
                            </FormGroup>
                            <FormGroup className="position-relative">
                              <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="with-icons"
                                value={this.state.pass}
                                onChange={(e) =>
                                  this.setData("pass", e.target.value)
                                }
                                onBlur={() =>
                                  this.validator.showMessageFor("password")
                                }
                              />
                              <span className="absolute-icon">
                                {ComonIcons.lock}
                              </span>
                              {this.state.activeTab === "1"
                                ? this.validator.message(
                                  "password",
                                  this.state.pass,
                                  "required|min:7",
                                  { className: "text-danger" }
                                )
                                : null}
                            </FormGroup>

                            <div className="forget-password pt-3">
                              <Link to="/forgot-password"
                                className="red-link link"
                                onClick={() => {
                                  history.push("/forgot-password");
                                }}
                              >
                                Forgot Password
                              </Link>
                            </div>

                            <div className="pt-3">
                              <button
                                type="button"
                                className="btn btn-custom-primary w-100"
                                onClick={() => this.signIn()}
                                onKeyPress={e => {
                                  if (e.key === 'Enter') e.preventDefault();
                                }}
                              >
                                Sign in
                              </button>
                            </div>
                            <div className="border-block or-block-wrapper text-center">
                              <h4 className="or-block f-bold ">OR</h4>
                            </div>
                            <div className="pt-0">
                              <button
                                className="btn btn-custom-google w-100"
                                type="button"
                              >
                                <span className="h3">
                                  <i className="fa fa-google"></i>{" "}
                                </span>
                                <span> Sign in with google</span>
                              </button>
                            </div>
                          </Form>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(null, {
  loginApi,
  signUp,
})(Animate)
