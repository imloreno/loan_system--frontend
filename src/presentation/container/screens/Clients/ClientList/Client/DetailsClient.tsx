import { useState } from "react";
import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
import Modal from "presentation/components/common/Modal";
import Observations from "presentation/components/common/Client/Observations";

interface IProps {
  id: number;
}

const DetailsClient = (props: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Handlers
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          onSuccess={() => {}}
          type="observations"
          text="Detalles"
        >
          <Observations id={props.id} onClose={handleClose} />
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
