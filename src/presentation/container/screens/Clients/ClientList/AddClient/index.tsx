import Button from "presentation/components/common/Button";
import AddPersonForm from "presentation/components/common/FormContainer/AddPersonForm";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import { useState } from "react";

type Props = {};

const AddClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Accept
  const handleAccept = () => {};
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={handleAccept}
        type="form"
      >
        <h3>Agregar un cliente</h3>
        <AddPersonForm />
      </Modal>
      <Button type="success" onClick={handleOpen}>
        <Icons type="adduser" />
        <span>Agregar un cliente</span>
      </Button>
    </>
  );
};
export default AddClient;
