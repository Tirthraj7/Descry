// import external modules
import React, { Component } from "react";
import { loginApi } from "../../redux/actions/api/apiAction";
import { connect } from "react-redux";
import { Button, Row, Col } from "reactstrap";
import { ComonIcons } from "../../content/commonIcons";
import { Link } from "react-router-dom";
import { history } from "../../history";
class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
  }

  render() {
    return (
      <div className="comon-full-layout">
        <Row className="no-gutters h-100">
          <Col xl={4} lg={5} md={12}>
            <div className="comon-block-1 d-flex justify-space-between">
              <div className="main-logo">
                <img
                  src={require("../../assets/images/logo.svg")}
                  className="img-fluid"
                  alt="logo"
                />
              </div>
              <div>
                <p className=" big-65 des-tx-white  py-3 py-md-0">
                  Lorem Ipsum
                  <br />{" "}
                  <span className="f-bold text-uppercase">Dummy Text</span>
                </p>
              </div>
              <div className="image-block pb-0">
                <div>
                  <img
                    src={require("../../assets/images/socialmedia.svg")}
                    className="img-fluid"
                    alt="logo-image"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7} md={12}>
            <div className="slice-wrapper payment-wrapper">
              <div>
                <Row>
                  <Col md={12}>
                    <div>
                      <h1 className="f-bold">Enter the account to analyze</h1>
                    </div>
                    <div className="social-media-wrapper">
                      <div className="social-media-title">
                        <div className="title-wrapper">
                          <h2 className="twiiter-title ">
                            <span className="icon twitter">
                              <i className="fa fa-twitter"></i>
                            </span>{" "}
                            <span className="title-content">Twitter</span>{" "}
                          </h2>
                        </div>
                        <div className="connect-link">
                          <Link className="link" to={``} >
                            {" "}
                            <span className="blk-1">
                              <i className="fa fa-plus"></i>
                            </span>
                            <span> Connect</span>
                          </Link>
                        </div>
                      </div>
                      <div className="notes">
                        <span className="h3 ">
                          {" "}
                          Looks like you have no connected Twitter Accounts.
                        </span>{" "}
                        <span className="link f-bold"> Connect One Now </span>
                      </div>
                      {/* <div className="acc-added notes">
                        <div className="acc-details">
                          <h3>Chaudhari Nirav</h3>
                          <p>@nirav1426</p>
                        </div>
                        <div className="acc-action">
                          <Link className="acc-action-active">
                            active <i className="fa fa-check"></i>
                          </Link>
                          <div className="remove">
                            <button className="btn btn-custom-primary p-2">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={2}>
                    <div className="pt-3 pt-md-5">
                      <button className="btn btn-transparent w-100" onClick={() => history.goBack()}>
                        <i className="fa fa-chevron-left"></i> <span>Back</span>
                      </button>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pt-3 pt-md-5">
                      <button className="btn btn-custom-primary w-100" onClick={() => history.push("/dashboard")}>
                        Finish
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { } = state.login;
  return {};
};
export default connect(mapStateToProps, { loginApi })(SocialMedia);
