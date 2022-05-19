import React, { useState } from "react";
import { ModalBody } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Modal from "reactstrap/lib/Modal";
import Row from "reactstrap/lib/Row";
import { ComonIcons } from "../content/commonIcons";

const UpgradeAccountModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" className="btn btn-custom-primary w-100" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="cstm-modal-header modal-header">
          <h2 className="f-700 modal-title">Get Started now!</h2>
          <button type="button" onClick={toggle} class="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <ModalBody>
          <div className="sub-scription-main-block">
          <div className="subscription-wrapper slice-wrapper">
            <div className="subscription-inner-wrapper">
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
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <button className="btn btn-custom-primary w-100">
                          <span Class="block-1">Buy Now</span>{" "}
                          <span Class="block-2">
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
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <button className="btn btn-custom-primary w-100">
                          <span Class="block-1">Buy Now</span>{" "}
                          <span Class="block-2">
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
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                            <li className="service">
                              <div className="block-1">{ComonIcons.check}</div>{" "}
                              <div className="block-2">
                                <h4 Class="mb-0">Secure your account</h4>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <button className="btn btn-custom-primary w-100">
                          <span Class="block-1">Buy Now</span>{" "}
                          <span Class="block-2">
                            <span className="icon">{ComonIcons.rightLink}</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
         
           </div>
          </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpgradeAccountModal;
