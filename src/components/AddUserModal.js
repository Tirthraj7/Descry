import React, { useState } from "react";
import Select from "react-select";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";


const AddUserModal = (props) => {
  const { buttonLabel, className, roleOptions } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" className="btn btn-custom-primary add-new" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="cstm-modal-header modal-header">
          <h2 className="f-700 modal-title">Invite User</h2>
          <button type="button" onClick={toggle} class="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <ModalBody>
          <h5 className="des-tx-fifth mb-3">
            Inviting a new user allows them to join your organization and view all trackers made by your team.
          </h5>
          <h5 className="des-tx-fifth mb-2">
            <span className="f-bold des-tx-black">Administrator : </span> Can manage users and trackers, but not
            subscription and billing
          </h5>
          <h5 className="des-tx-fifth mb-2">
            <span className="f-bold des-tx-black">Editor : </span> Can create, pause, restart trackers.
          </h5>
          <h5 className="des-tx-fifth mb-4">
            <span className="f-bold des-tx-black">Viewer : </span> Can only see trackers.
          </h5>
          <Form className="">
            <FormGroup className="position-relative mb-4">
              <Label>
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="john.doe@example.com"
                className="px-0"
                // value={this.state.email}
                onChange={(e) => this.setData("email", e.target.value)}
                // onBlur={() => this.validator.showMessageFor("email")}
              />
            </FormGroup>
            <FormGroup className="position-relative mb-4">
              <Label>
                Role
              </Label>
              <Select options={roleOptions} className="cstm-select-container" classNamePrefix="cstm-select" placeholder="Select Role.." />
            </FormGroup>
            <div className="">
              <button type="button" className="btn btn-custom-primary w-100" onClick={toggle}>
                Send Invitation
              </button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddUserModal;
