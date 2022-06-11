import { apiUpdatePerson } from "infraestructure/api/person";
import { IPerson } from "interfaces/person";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdatePerson from "presentation/components/forms/person/AddUpdatePerson";
import { useState } from "react";

type Props = { data: IPerson };

const UpdateClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Accept
  const handleAccept = (form: IPerson) => {
    const data = { ...form, ci: form.ci[1] + form.ci[0] };
    // apiUpdatePerson(data); //api
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
        <h3>Modificar persona</h3>
        <AddUpdatePerson
          onSuccess={handleAccept}
          onClose={handleClose}
          data={props.data}
        />
      </Modal>
      <Button type="info" className="client_button" onClick={handleOpen}>
        <Icons type="edit" className="client_button-icon" />
        <span>Editar</span>
      </Button>
    </>
  );
};
export default UpdateClient;
