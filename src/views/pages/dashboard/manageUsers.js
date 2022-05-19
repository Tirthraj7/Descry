import { Row, Col, Card, CardBody, Form, FormGroup, Input, Button, Table } from "reactstrap";
import { ComonIcons } from "../../../content/commonIcons";
import { NavLink, Link } from "react-router-dom";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import React, { Component } from "react";
import AddUserModal from "../../../components/AddUserModal";
import Select from "react-select";
import Label from "reactstrap/lib/Label";
import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";

const roleOptions = [
  { value: "administrator", label: "Administrator" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

class ManageUsers extends Component {
  render() {
    return (
      <div className="manage-user">
        <div className="title Edit-title">
          <h1 className="f-700">Brand Settings</h1>
        </div>
        <div className="content ">
          <Row>
            <Col md={12}>
              <h5 className="des-tx-fifth pb-2">
                Social media is more fun with friends! Add team members to collaborate on Keyhole.
              </h5>
              <h5 className="des-tx-fifth pb-2">
                <span className="f-bold des-tx-black">Owner : </span> Can manage subscriptions, users and trackers.
                Email success@keyhole.co to change.
              </h5>
              <h5 className="des-tx-fifth pb-2">
                <span className="f-bold des-tx-black">Administrator : </span> Can manage users and trackers, but not
                subscription and billing
              </h5>
              <h5 className="des-tx-fifth pb-2">
                <span className="f-bold des-tx-black">Editor : </span> Can create, pause, restart trackers.
              </h5>
              <h5 className="des-tx-fifth pb-2">
                <span className="f-bold des-tx-black">Viewer : </span> Can only see trackers.
              </h5>
            </Col>
            <Col md={12}>
              <div className="d-flex align-items-center mt-3">
                <AddUserModal
                  buttonLabel="Add New User"
                  roleOptions={roleOptions}
                  className="modal-dialog-centered add-user-modal"
                />
                <p className="ml-3 des-tx-fifth"> Used: 1 / 25</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="table-responsive">
                <div className="manage-user-table">
                  <table responsive>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Monthly Posts</th>
                      <th></th>
                    </tr>
                  </table>
                  <table className="gfg" responsive>
                    <tr>
                      <td>
                        <div>Thomas</div>
                        <div className="noted noted-confirm">its you</div>
                      </td>
                      <td>Owner</td>
                      <td>1000</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div>Thomas</div>
                        <div className="noted ">Pending</div>
                      </td>
                      <td>
                        <Select
                          options={roleOptions}
                          defaultValue={roleOptions[1]}
                          className="cstm-select-container cstm-select-container-sm"
                          classNamePrefix="cstm-select"
                        />
                      </td>
                      <td>
                        <FormGroup className="position-relative mng-user-post-fgroup">
                          <Label className=" f-400">Limit:</Label>
                          <Input type="number" className="ml-2" placeholder="posts" name="posts-number" value={1000} />
                        </FormGroup>
                        <FormGroup className="position-relative mng-user-post-fgroup">
                          <span className=" f-400">Used:</span>
                          <span className=" f-400 ml-2">0</span>
                        </FormGroup>
                      </td>
                      <td>
                        <UncontrolledDropdown className="mng-user-dropdown">
                          <DropdownToggle className="mng-user-dropdown-toggle">{ComonIcons.moreVerticle}</DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Remove User</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Thomas</div>
                        <div className="noted">its you</div>
                      </td>
                      <td>Owner</td>
                      <td>1000</td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </Col>
            <Col lg={4} xl={3}>
              <div className="py-4">
                <button className="btn btn-custom-primary w-100">save changes</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default ManageUsers;
