import { useState } from "react";
import { apiUpdatePerson } from "infraestructure/api/person";
import { formatReduxToApi } from "infraestructure/gateways/format/reduxFormat";
import { usePersons } from "infraestructure/hooks/redux/usePersons";
import { IPerson } from "interfaces/person";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdatePerson from "presentation/components/common/forms/person/AddUpdatePerson";

type Props = { data: IPerson };

const UpdateClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { refreshOnce } = usePersons();

  //Accept
  const handleAccept = async (form: IPerson) => {
    const res = await apiUpdatePerson(formatReduxToApi(form)); //api
    if (res) refreshOnce(form);
    refreshOnce(form);
  };
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          onSuccess={(form: IPerson) => handleAccept(form)}
          type="form"
          text="Modificar persona"
        >
          <AddUpdatePerson
            onSuccess={handleAccept}
            onClose={handleClose}
            data={props.data}
          />
        </Modal>
      )}
      <Button type="info" className="client_button" onClick={handleOpen}>
        <Icons type="edit" className="client_button-icon" />
        <span>Editar</span>
      </Button>
    </>
  );
};
export default UpdateClient;
