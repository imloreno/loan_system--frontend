import { apiCreatePerson } from "infraestructure/api/person";
import { IPerson } from "interfaces/person";
import Button from "presentation/components/common/Button";
import AddPersonForm from "presentation/components/common/FormContainer/AddPersonForm";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import { useState } from "react";

type Props = {};

const AddClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Accept
  const handleAccept = (form: IPerson) => {
    const data = { ...form, ci: form.ci[0] + form.ci[1] };
    apiCreatePerson(data);
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
        <AddPersonForm onSuccess={handleAccept} onClose={handleClose} />
      </Modal>
      <Button type="success" onClick={handleOpen}>
        <Icons type="adduser" />
        <span>Agregar un cliente</span>
      </Button>
    </>
  );
};
export default AddClient;
