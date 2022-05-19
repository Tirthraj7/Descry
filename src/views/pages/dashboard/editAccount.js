// import axios from "axios";
import React, { Component } from "react";
import { toastr } from "react-redux-toastr";
import { ClipLoader } from "react-spinners";
import { Col, Form, FormGroup, Input } from "reactstrap";
import SimpleReactValidator from "simple-react-validator";
// import { ComonIcons } from "../../../content/commonIcons";
import { history } from "../../../history";

class EditAccount extends Component {
  state = {
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    loading: false
  }
  setData = (name, val) => {
    this.setState({ [name]: val })
  }

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
  }
  submit = () => {
    if (this.validator.allValid()
    ) {
      toastr.success("Details Added Successfully")
      history.push("/dashboard");
      return false
    } else {
      this.validator.showMessages();
    }
  }

  componentDidMount() {
    const state = JSON.parse(localStorage.getItem("user"))
    this.setState({ ...state })
  }

  render() {
    // console.log(this.state);
    return this.state.loading ? (
      <ClipLoader />
    ) : (
      <div>
        <div className="edit-account">
          <div className="title Edit-title">
            <h1 className="f-700">Edit Account</h1>
          </div>
          <div className="form-block">
            <Form className="row">
              <Col lg={4}>
                <FormGroup className="position-relative">
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    className="with-icons"
                    value={this.state.firstName}
                    onChange={(e) => this.setData("firstName", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("FirstName")}
                  />
                  {/* <span className="absolute-icon">{ComonIcons.user}</span> */}
                  {this.validator.message(
                    "FirstName",
                    this.state.firstName,
                    "required",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col lg={4}>
                <FormGroup className="position-relative">
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    className="with-icons"
                    // className="with-icons"
                    value={this.state.lastName}
                    onChange={(e) => this.setData("lastName", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("LastName")}
                  />
                  {/* <span className="absolute-icon">{ComonIcons.user}</span> */}
                  {this.validator.message(
                    "LastName",
                    this.state.lastName,
                    "required",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col lg={8}>
                <FormGroup className="position-relative">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="with-icons"
                    value={this.state.email}
                    onChange={(e) => this.setData("email", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("Email")}
                  />
                  {/* <span className="absolute-icon">{ComonIcons.mailer}</span> */}
                  {this.validator.message(
                    "Email",
                    this.state.email,
                    "required|email",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col lg={8}>
                <FormGroup className="position-relative">
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company"
                    className="with-icons"
                    value={this.state.company}
                    onChange={(e) => this.setData("company", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("Company")}
                  />
                  {/* <span className="absolute-icon">{ComonIcons.suitcase}</span> */}
                  {this.validator.message(
                    "Company",
                    this.state.company,
                    "required",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col lg={8}>
                <FormGroup className="position-relative">
                  <Input
                    type="number"
                    name="telephone"
                    id="telephone"
                    placeholder="Telephone number"
                    className="with-icons"
                    value={this.state.phone}
                    onChange={(e) => this.setData("phone", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("Telephone number")}
                  />
                  {/* <span className="absolute-icon">{ComonIcons.callIcon}</span> */}
                  {this.validator.message(
                    "Telephone number",
                    this.state.phone,
                    "required|phone",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>

              <Col lg={12}>
                <div className="forget-password pt-3 w-auto">
                  <span>
                    <label className="custom-container ">
                      Email me when an influencer authentication expires
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </span>
                </div>
              </Col>
              <Col lg={12}>
                <div className="forget-password pt-3 w-auto">
                  <label className="custom-container ">
                    Send me weekly tracker emails
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </Col>
              <Col lg={12}>
                <div className="forget-password pt-3 w-auto">
                  <label className="custom-container ">
                    Send me alert notifications by email
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </Col>
              <Col lg={3}>
                <div className="py-4">
                  <button className="btn btn-custom-primary w-100" type="button" onClick={() => this.submit()}>submit</button>
                </div>
              </Col>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAccount;