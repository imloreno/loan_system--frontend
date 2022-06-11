import { useState } from "react";
import { apiCreatePerson } from "infraestructure/api/person";
import { IPerson } from "interfaces/person";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdatePerson from "presentation/components/forms/person/AddUpdatePerson";

type Props = {};

const AddClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Accept
  const handleAccept = (form: IPerson) => {
    // console.log(form);
    // apiCreatePerson(form);
  };
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={(form: IPerson) => handleAccept(form)}
        type="form"
      >
        <h3>Agregar un cliente</h3>
        <AddUpdatePerson onSuccess={handleAccept} />
      </Modal>
      <Button type="success" onClick={handleOpen}>
        <Icons type="adduser" />
        <span>Agregar un cliente</span>
      </Button>
    </>
  );
};
export default AddClient;
