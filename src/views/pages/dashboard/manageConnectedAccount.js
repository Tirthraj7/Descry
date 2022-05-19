import React from "react";
import { Row, Col, Card, CardBody, Form, FormGroup, Input } from "reactstrap";
import { ComonIcons } from "../../../content/commonIcons";
import { NavLink, Link } from "react-router-dom";
function ManageConnectedAccount() {
  return (
    <div>
      <div className="manage-edit-account">
        <div className="title Edit-title">
          <h1 className="f-700">Manage Connected Account</h1>
        </div>
        <div className="content py-3">
          <Row>
            <Col md={6}>
              <h5 className="des-tx-fifth ">
                By signing in to your social media accounts, you give Keyhole
                permission to fetch deeper insights for those accounts.
              </h5>
              <h5 className="des-tx-fifth mt-3">
                This also creates a connection between Keyhole and that platform
                (e.g. Twitter), allowing you to track public data about other
                accounts (e.g. your competitors' Twitter accounts) and easily
                compare accounts.
              </h5>
            </Col>
          </Row>
        </div>

        <div className="form-block">
          <Row>
            <Col md={7}>
              <div className="social-media-wrapper twitter">
                <div className="social-media-title">
                  <div className="title-wrapper">
                    <h2 className="twiiter-title ">
                      <span className="icon twitter">
                        <i class="fa fa-twitter"></i>
                      </span>{" "}
                      <span className="title-content">Twitter</span>{" "}
                    </h2>
                  </div>
                  <div className="connect-link">
                    <Link className="link">
                      {" "}
                      <span className="blk-1">
                        <i class="fa fa-plus"></i>
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
                      active <i class="fa fa-check"></i>
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
            <Col md={7}>
              <div className="social-media-wrapper facebook">
                <div className="social-media-title">
                  <div className="title-wrapper">
                    <h2 className="facebook-title ">
                      <span className="icon facebook">
                        <i class="fa fa-facebook-f"></i>
                      </span>{" "}
                      <span className="title-content">Facebook</span>{" "}
                    </h2>
                  </div>
                  <div className="connect-link">
                    <Link className="link">
                      {" "}
                      <span className="blk-1">
                        <i class="fa fa-plus"></i>
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
                      active <i class="fa fa-check"></i>
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
            <Col md={7}>
              <div className="social-media-wrapper instagram">
                <div className="social-media-title">
                  <div className="title-wrapper">
                    <h2 className="insta-title ">
                      <span className="icon insta">
                        <i class="fa fa-instagram"></i>
                      </span>{" "}
                      <span className="title-content">instagram</span>{" "}
                    </h2>
                  </div>
                  <div className="connect-link">
                    <Link className="link">
                      {" "}
                      <span className="blk-1">
                        <i class="fa fa-plus"></i>
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
                      active <i class="fa fa-check"></i>
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
        </div>
      </div>
    </div>
  );
}

export default ManageConnectedAccount;
