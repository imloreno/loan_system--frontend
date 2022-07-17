import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdateObservation from "presentation/components/forms/observation/AddUpdateObservation";
import { useState } from "react";

type Props = {
  id: number;
};

const AddObservation = (props: Props) => {
  const { id } = props;

  const [modalOpen, setModalOpen] = useState(false);

  //Handlers
  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  return (
    <>
      {modalOpen && (
        <Modal
          text="Agregar observación"
          onClose={handleClose}
          onSuccess={() => {}}
          type="form"
        >
          <AddUpdateObservation
            id_person={id}
            onClose={handleClose}
            onSuccess={handleOpen}
          />
        </Modal>
      )}
      <Button type="success" onClick={handleOpen}>
        <Icons type="add" />
        <span>Agregar</span>
      </Button>
    </>
  );
};

export default AddObservation;
