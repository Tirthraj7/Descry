import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { Row, Col } from "reactstrap";
import { ComonIcons } from "../../content/commonIcons";
import { history } from "../../history";

function Subscription() {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <ClipLoader />
  ) : (
    <div>
      <div className="comon-full-layout sub-scription-main-block">
        <Row className="no-gutters h-100">
          <Col xl={4} lg={5} md={12}>
            <div className="comon-block-1 d-flex justify-space-between">
              <div className="main-logo">
                <img src={require("../../assets/images/logo.svg")} className="img-fluid" alt="logo" />
              </div>
              <div>
                <p className=" big-65 des-tx-white  py-3 py-md-0">
                  Start saving <br /> <span className="f-bold text-uppercase">your money</span>
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
                <div>
                  <img
                    src={require("../../assets/images/subscription-side.svg")}
                    className="img-fluid"
                    alt="logo-images"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7} md={12}>
            <div className="subscription-wrapper slice-wrapper my-0 pt-0 pb-0">
              <div>
                <h1 className="f-bold">Get Started now!</h1>
                <h5 className="des-tx-fourth">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                </h5>
              </div>
              <div className="d-flex pt-3 pt-md-5">
                <Row>
                  <Col md={6} lg={6} xl={4}>
                    <div className="subscription-inner-wrapper">
                      <div className="package-element ">
                        <div className="package-title ">
                          <div className="block-1">{ComonIcons.packageIcon}</div>
                          <div className="block-2">
                            <h3 className="h1 mb-0 f-bold ">Basic</h3>
                          </div>
                        </div>
                        <div className="price-block">
                          <div>
                            <span className="big-50 f-bold ">
                              <span className="doller-sign des-tx-primary ">$</span>
                              <span className="price">29</span>
                            </span>
                            <span className="des-tx-primary h4">/ Month</span>
                          </div>
                        </div>
                        <div className="services-list-wrapper">
                          <ul className="inner-wrapper">
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <button className="btn btn-custom-primary w-100">
                          <span className="block-1">Buy Now</span>{" "}
                          <span className="block-2">
                            <span className="icon">{ComonIcons.rightLink}</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={6} xl={4}>
                    <div className="subscription-inner-wrapper active">
                      <div className="package-element ">
                        <div className="package-title ">
                          <div className="block-1">{ComonIcons.packageIcon}</div>
                          <div className="block-2">
                            <h3 className="h1 mb-0 f-bold ">Basic</h3>
                          </div>
                        </div>
                        <div className="price-block">
                          <div className="">
                            <span className="big-50 f-bold ">
                              <span className="doller-sign des-tx-primary ">$</span>
                              <span className="price">29</span>
                            </span>
                            <span className="des-tx-primary h4">/ Month</span>
                          </div>
                        </div>
                        <div className="services-list-wrapper">
                          <ul className="inner-wrapper">
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <button className="btn btn-custom-primary w-100">
                          <span className="block-1">Buy Now</span>{" "}
                          <span className="block-2">
                            <span className="icon">{ComonIcons.rightLink}</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={6} xl={4}>
                    <div className="subscription-inner-wrapper">
                      <div className="package-element ">
                        <div className="package-title ">
                          <div className="block-1">{ComonIcons.packageIcon}</div>
                          <div className="block-2">
                            <h3 className="h1 mb-0 f-bold ">Basic</h3>
                          </div>
                        </div>
                        <div className="price-block">
                          <div>
                            <span className="big-50 f-bold ">
                              <span className="doller-sign des-tx-primary ">$</span>
                              <span className="price">29</span>
                            </span>
                            <span className="des-tx-primary h4">/ Month</span>
                          </div>
                        </div>
                        <div className="services-list-wrapper">
                          <ul className="inner-wrapper">
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 className="mb-0">Secure your account</h4>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <button className="btn btn-custom-primary w-100">
                          <span className="block-1">Buy Now</span>{" "}
                          <span className="block-2">
                            <span className="icon">{ComonIcons.rightLink}</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex justify-content-end">
                <button className="start-trial-btn" onClick={() => history.push("/socialmedia")}>
                  <span className="block-1">Start Trial</span>{" "}
                  <span className="block-2">
                    <span className="icon">{ComonIcons.rightLink}</span>
                  </span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Subscription;
