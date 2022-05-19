// import external modules
import React, { Component } from "react";
import { loginApi } from "../../redux/actions/api/apiAction";
import { history } from "../../app/AppRouter";
import { connect } from "react-redux";
import { Button, Row, Col } from "reactstrap";
import { ComonIcons } from "../../content/commonIcons";
import { ClipLoader } from "react-spinners";
class Payment extends Component {
  state = {
    loading: false
  }
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
  }

  render() {
    return this.state.loading ? (
      <ClipLoader />
    ) : (
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
              <div className>
                <p className=" big-65 des-tx-white  py-3 py-md-0">
                  Start saving <br />{" "}
                  <span className="f-bold text-uppercase">your money</span>
                </p>
                <h4 className="des-tx-white pt-3">
                  Choose plan that works best
                  <br />
                  for you, feel free to contact us
                  <br />
                  if you need more details.
                </h4>
              </div>
              <div className="image-block pb-0">
                <div className>
                  <img
                    src={require("../../assets/images/subscription-side.svg")}
                    className="img-fluid"
                    alt="logo-image"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7} md={12}>
            <div className="slice-wrapper payment-wrapper">
              <div className>
                <Row>
                  <Col md={12}>
                    <div className>
                      <h1 className="f-bold">Make Payment</h1>
                      <div className="payment-type">
                        <div className="payment-block">
                          <input
                            id="paymentpaypal"
                            name="payment-block"
                            type="radio"
                          />
                          <label for="paymentpaypal">
                            <div className="img-block text-center">
                              <img
                                src={require("../../assets/images/paypal.svg")}
                                className="img-fluid"
                                alt="img-1"
                              />
                            </div>
                          </label>
                        </div>
                        <div className="payment-block">
                          <input id="mpesa" name="payment-block" type="radio" />
                          <label for="mpesa">
                            <div className="img-block text-center">
                              <img
                                src={require("../../assets/images/m-pesa.svg")}
                                className="img-fluid"
                                alt="img-1"
                              />
                            </div>
                          </label>
                        </div>
                        <div className="payment-block">
                          <input
                            id="airtel"
                            name="payment-block"
                            type="radio"
                          />
                          <label for="airtel">
                            <div className="img-block text-center">
                              <img
                                src={require("../../assets/images/airtel.svg")}
                                className="img-fluid"
                                alt="img-1"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <div className="pt-3 pt-md-5">
                      <button className="btn btn-custom-primary w-100">
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
export default connect(mapStateToProps, { loginApi })(Payment);
