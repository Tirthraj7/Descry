import React, { useState } from "react";
import Select from "react-select";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";


const CancelAccountModal = (props) => {
  const { buttonLabel, className, reasonsList } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" className="btn btn-custom-primary btn-custom-transparent w-100" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="cstm-modal-header modal-header">
          <button type="button" onClick={toggle} class="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <ModalBody>
<h2 className="h1 cancel-acc-modal-heading">
  We're grateful you tried us.
</h2>
        <Form className="">
            <FormGroup className="position-relative mb-4">
              <Label>
               What's making you leave?
              </Label>
              <Select options={reasonsList} className="cstm-select-container" classNamePrefix="cstm-select" placeholder="Select Reason" />
            </FormGroup>
            <div className="btn-box">
              <button type="button" className="btn btn-custom-primary btn-custom-transparent" onClick={toggle}>
              Take Me Back
              </button>
              <button type="button" className="btn btn-custom-primary  " onClick={toggle}>
                Submit
              </button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CancelAccountModal;
