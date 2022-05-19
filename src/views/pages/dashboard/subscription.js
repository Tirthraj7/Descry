import React from "react";
import { Row, Col, Card, CardBody, Form, FormGroup, Input } from "reactstrap";
import { ComonIcons } from "../../../content/commonIcons";
import { NavLink, Link } from "react-router-dom";
import CancelAccountModal from "../../../components/CancelAccountModal";
import UpgradeAccountModal from "../../../components/UpgradeAccountModal";

const reasonsList = [
  { value: "Option 1", label: "option1" },
  { value: "Option 2", label: "option2" },
  { value: "Option 3", label: "option3" },
];


function Subscription() {
  return (
    <div>
      <div className="manage-edit-account">
        <div className="title Edit-title">
          <h1 className="f-700">Subscriptions</h1>
        </div>
        <div className="py-3">
          <h3 className="des-tx-secondary f-bold">Trial version </h3>
        </div>
        <div className="content ">
          <Row>
            <Col md={6}>
              <h5 className="des-tx-fifth pb-2">
                You are not currently subscribed to any Descry plan.
                <br /> Select “ Subscribe Now” to subscribe.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <div className="">
                <UpgradeAccountModal buttonLabel="Subscribe Now" className="modal-dialog-centered upgrade-acc-modal" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="pt-5 pb-3 pt-md-5 pb-md-3">
          <h3 className="des-tx-primary f-bold">Cancel Account </h3>
        </div>
        <div className="content">
          <Row>
            <Col md={6}>
              <h5 className="des-tx-fifth   pb-2">
                When you cancel your Descry account, we wll end your free trail and stop your trackers.
                <br />
                You can log back in anytime to see your data.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <div className="">
                <CancelAccountModal buttonLabel=" Cancel Account" reasonsList={reasonsList} className="modal-dialog-centered cancel-acc-modal" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
