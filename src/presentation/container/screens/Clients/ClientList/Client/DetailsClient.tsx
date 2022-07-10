import { useState } from "react";
import { formatReduxToApi } from "infraestructure/gateways/format/reduxFormat";
import { apiCreatePerson } from "infraestructure/api/person";
import { IPerson } from "interfaces/person";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdatePerson from "presentation/components/forms/person/AddUpdatePerson";
import { usePersons } from "infraestructure/hooks/redux/usePersons";

const DetailsClient = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { refreshPersons } = usePersons();

  //Handlers
  const handleAccept = async (form: IPerson) => {
    const data = formatReduxToApi({ ...form, estado: true, id: 0 }); //Formating to redux
    const res = await apiCreatePerson(data);
    res && setTimeout(() => refreshPersons(), 100);
  };
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSuccess={(form: IPerson) => handleAccept(form)}
          type="observations"
        >
          <h3>Detalles</h3>
        </Modal>
      )}
      <Button type="default" onClick={handleOpen}>
        <Icons type="details" />
        <span>Detalles</span>
      </Button>
    </>
  );
};
export default DetailsClient;
