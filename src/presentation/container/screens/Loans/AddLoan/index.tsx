import React, { useState } from "react";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdateLoan from "presentation/components/common/forms/loan/AddUpdateLoan";

type Props = {};

const AddLoan = (props: Props) => {
  const [modal, setModal] = useState(false);

  //Handle modal
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <>
      {modal && (
        <Modal
          text="Agregar prestamo"
          onSuccess={() => {}}
          onClose={handleClose}
          type="form"
        >
          <AddUpdateLoan onClose={() => {}} onSuccess={() => {}} />
        </Modal>
      )}
      <Button type="success" onClick={handleOpen}>
        <Icons type="loan" />
        <span>Agregar un préstamo</span>
      </Button>
    </>
  );
};

export default AddLoan;
