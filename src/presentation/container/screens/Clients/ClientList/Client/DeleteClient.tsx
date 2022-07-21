import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePerson } from "application/redux/reducers/personSlice";
import { apiDeletePerson } from "infraestructure/api/person";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";

type Props = { id: number };

const DeleteClient = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Redux
  const dispatch = useDispatch();

  //Accept
  const handleAccept = () => {
    apiDeletePerson(props.id);
    dispatch(deletePerson(props.id));
    handleClose();
  };
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Modal
          onClose={handleClose}
          onSuccess={handleAccept}
          type="confirmation"
          text="¿Estás seguro que quieres eliminar este elemento?"
        />
      )}
      <Button type="error" onClick={handleOpen}>
        <Icons type="delete" />
        <span>Eliminar</span>
      </Button>
    </>
  );
};
export default DeleteClient;
