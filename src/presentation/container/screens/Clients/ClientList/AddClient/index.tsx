<<<<<<< HEAD:src/presentation/container/screens/Clients/ClientList/Client/AddClient.tsx
import { useState } from "react";
import { apiCreatePerson } from "infraestructure/api/person";
import { IPerson } from "interfaces/person";
=======
>>>>>>> 1eceba3:src/presentation/container/screens/Clients/ClientList/AddClient/index.tsx
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import AddUpdatePerson from "presentation/components/forms/person/AddUpdatePerson";

type Props = {};

const AddClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Accept
<<<<<<< HEAD:src/presentation/container/screens/Clients/ClientList/Client/AddClient.tsx
  const handleAccept = (form: IPerson) => {
    // console.log(form);
    // apiCreatePerson(form);
  };
=======
  const handleAccept = () => {};
>>>>>>> 1eceba3:src/presentation/container/screens/Clients/ClientList/AddClient/index.tsx
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
<<<<<<< HEAD:src/presentation/container/screens/Clients/ClientList/Client/AddClient.tsx
        <AddUpdatePerson onSuccess={handleAccept} />
=======
        <AddPersonForm />
>>>>>>> 1eceba3:src/presentation/container/screens/Clients/ClientList/AddClient/index.tsx
      </Modal>
      <Button type="success" onClick={handleOpen}>
        <Icons type="adduser" />
        <span>Agregar un cliente</span>
      </Button>
    </>
  );
};
export default AddClient;
