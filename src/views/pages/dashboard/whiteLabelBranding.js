import { Row, Col, Card, CardBody, Form, FormGroup, Input } from "reactstrap";
import { ComonIcons } from "../../../content/commonIcons";
import { NavLink, Link } from "react-router-dom";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import React, { Component } from "react";
class WhiteLabelBranding extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });
    return (
      <div>
        <div className="white-label">
          <div className="title Edit-title">
            <h1 className="f-700">Brand Settings</h1>
          </div>
          <div className="form-block color-text-blocks">
            <Row className="align-items-center">
              <Col md={12}>
                <div className="d-flex align-items-center">
                  <div className="title-block">
                    <h3 className="des-tx-primary mb-0">
                      Primary Color {ComonIcons.question}
                    </h3>
                  </div>
                  <div className="content-block">
                    <div style={styles.swatch} onClick={this.handleClick}>
                      <div style={styles.color} />
                    </div>
                    <div>
                      {this.state.displayColorPicker ? (
                        <div style={styles.popover}>
                          <div
                            style={styles.cover}
                            onClick={this.handleClose}
                          />
                          <SketchPicker
                            color={this.state.color}
                            onChange={this.handleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="d-flex align-items-center">
                  <div className="title-block">
                    <h3 className="des-tx-primary mb-0">
                      Secondary Color {ComonIcons.question}
                    </h3>
                  </div>
                  <div className="content-block">
                    <div style={styles.swatch} onClick={this.handleClick}>
                      <div style={styles.color} />
                    </div>
                    <div>
                      {this.state.displayColorPicker ? (
                        <div style={styles.popover}>
                          <div
                            style={styles.cover}
                            onClick={this.handleClose}
                          />
                          <SketchPicker
                            color={this.state.color}
                            onChange={this.handleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="d-flex align-items-center">
                  <div className="title-block">
                    <h3 className="des-tx-primary mb-0">
                      Primary logo {ComonIcons.question}
                    </h3>
                  </div>
                  <div className="content-block">
                    <input type="file" />
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="d-flex align-items-center mb-2">
                  <div className="title-block">
                    <h3 className="des-tx-primary mb-0">
                      Secondary logo {ComonIcons.question}
                    </h3>
                  </div>
                  <div className="content-block">
                    <input type="file" />
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mt-4 mb-1">
                  <h5 className="des-tx-fifth">
                    This is how your brand will appear in the header of all
                    tracker pages.
                  </h5>
                </div>
              </Col>
              <Col md={12}>
                <div className="my-3">
                  <div className="logo-view">
                    <img
                      src={require("../../../assets/images/logo-dark.svg")}
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mt-4 mb-1">
                  <h5 className="des-tx-fifth">
                    This is how your brand will appear as a water-mark on charts
                    and reports.
                  </h5>
                </div>
              </Col>
              <Col md={12}>
                <div className="my-3">
                  <div className="logo-view">
                    <img
                      src={require("../../../assets/images/logo-dark.svg")}
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={4} xl={3}>
                <Link className="link">Reset Branding</Link>
              </Col>
              <Col lg={4} xl={3}>
                <div className="py-4">
                  <button className="btn btn-custom-primary w-100">
                    save changes
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default WhiteLabelBranding;
