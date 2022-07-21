import React, { useState } from "react";
import MiniButton from "presentation/components/common/Button/MiniButton";
import Icons from "../../Icons";
import { IObservation } from "interfaces/observation";
import Modal from "../../Modal";
import { useObservations } from "infraestructure/hooks/redux/useObservations";

interface IProps {
  id: number;
  observation: IObservation;
}

const ObservationItem = (props: IProps) => {
  const {
    id,
    observation: { observation },
  } = props;
  const { deleteObservation } = useObservations();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Handlers
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSuccess = () => {
    deleteObservation(id);
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <Modal
          type="confirmation"
          text="Eliminar observación"
          onClose={handleClose}
          onSuccess={handleSuccess}
        />
      )}
      <li className="observation-item">
        <span>{observation}</span>
        <MiniButton onClick={handleOpen}>
          <Icons type="less" />
        </MiniButton>
      </li>
    </>
  );
};

export default ObservationItem;
