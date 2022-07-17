import Button from "presentation/components/common/Button";
import ClientItem from "../ClientItem";
import ObservationStyled from "./Observation.styled";
import ObservationList from "./ObservationList";
import AddObservation from "./AddObservation";

type Props = {
  id: number;
  onSuccess?: () => void;
  onClose?: () => void;
};

const Observations = (props: Props) => {
  const { id, onSuccess = () => {}, onClose = () => {} } = props;

  //Handlers
  const handleSuccess = () => {
    onSuccess();
    onClose();
  };

  return (
    <ObservationStyled>
      <ClientItem />
      <div className="header">
        <h3>Observaciones</h3>
        <AddObservation id={id} />
      </div>
      <ObservationList />
      <div className="button-list">
        <Button type="success" onClick={handleSuccess}>
          <span>Aceptar</span>
        </Button>
        <Button type="error" onClick={onClose}>
          <span>Cancelar</span>
        </Button>
      </div>
    </ObservationStyled>
  );
};

export default Observations;
