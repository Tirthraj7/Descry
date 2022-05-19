import React from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";
import { ComonIcons } from "../../../content/commonIcons";
// import { NavLink, Link } from "react-router-dom";
import { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
// import { history } from "../../../history";
// import { toastr } from "react-redux-toastr";
import { changePassword } from "../../../redux/actions/api/apiAction";
import { store } from "../../../redux/storeConfig/store";
import { connect } from 'react-redux'
import { ClipLoader } from "react-spinners";
import { toastr } from "react-redux-toastr";


class ChangePassword extends Component {
  state = {
    token: '',
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
    loading: false,
    id: store.getState().login.loginUser.id,
    hidden: true,
  }
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      message: {
        in: 'Passwords need to match!'
      }
    })
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }


  changePasswordFn = async () => {
    const { newpassword, confirmpassword } = this.state;
    if (newpassword !== confirmpassword) {
      toastr.error("NewPassword & Confirm Password Should be same.")
    } else if (this.validator.allValid()) {
      // console.log("hello");
      this.setState({ loading: true })
      const data = {
        id: this.state.id,
        token: this.state.token,
        oldpassword: this.state.oldpassword,
        newpassword: this.state.newpassword
      }
      await this.props.changePassword(data)
      this.setState({ loading: false })
    } else {
      this.validator.showMessages()
    }
  }
  setData = (name, val) => {
    this.setState({ [name]: val })
  }

  render() {
    // console.log(store.getState());
    return this.state.loading ? (
      <ClipLoader />
    ) : (
      <div>
        <div className="manage-edit-account">
          <div className="title Edit-title">
            <h1 className="f-700">Change Password</h1>
          </div>
          <div className="content py-3">
            <Form>
              <Col md={7}>
                <FormGroup className="position-relative">
                  <Input
                    type={this.state.hidden ? 'password' : 'text'}
                    name="password"
                    id='oldpassword'
                    placeholder="Password"
                    className="with-icons"
                    value={this.state.oldpassword}
                    onChange={(e) => this.setData("oldpassword", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("oldpassword")}
                  />
                  <span className="absolute-icon" onClick={this.toggleShow}>{ComonIcons.lock}</span>
                  {this.validator.message(
                    "oldpassword",
                    this.state.oldpassword,
                    "required|min:7",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col md={7}>
                <FormGroup className="position-relative">
                  <Input
                    type={this.state.hidden ? 'password' : 'text'}
                    name="newpassword"
                    id='password'
                    placeholder="New Password"
                    className="with-icons"
                    value={this.state.newpassword}
                    onChange={(e) => this.setData("newpassword", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("newpassword")}
                  />
                  <span className="absolute-icon" onClick={this.toggleShow}>{ComonIcons.lock}</span>
                  {this.validator.message(
                    "newpassword",
                    this.state.newpassword,
                    "required|min:7",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col md={7}>
                <FormGroup className="position-relative">
                  <Input
                    type={this.state.hidden ? 'password' : 'text'}
                    name="confirmpassword"
                    id='password'
                    placeholder="Confirm Password"
                    className="with-icons"
                    value={this.state.confirmpassword}
                    onChange={(e) => this.setData("confirmpassword", e.target.value)}
                    onBlur={() => this.validator.showMessageFor("confirmpassword")}
                  />
                  <span className="absolute-icon" onClick={this.toggleShow}>{ComonIcons.lock}</span>
                  {this.validator.message(
                    "confirmpassword",
                    this.state.confirmpassword,
                    "required|min:7",
                    { className: "text-danger" }
                  )
                  }
                </FormGroup>
              </Col>
              <Col lg={3}>
                <div className="py-4">
                  <button className="btn btn-custom-primary w-100" type='button'
                    onClick={() => this.changePasswordFn()}
                  >
                    Save Changes
                  </button>
                </div>
              </Col>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, {
  changePassword
})(ChangePassword);
