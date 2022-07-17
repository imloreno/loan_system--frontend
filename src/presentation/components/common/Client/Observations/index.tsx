import ClientItem from "../ClientItem";
import ObservationStyled from "./Observation.styled";
import ObservationList from "./ObservationList";
import AddObservation from "./AddObservation";

type Props = {
  id: number;
};

const Observations = (props: Props) => {
  const { id } = props;

  return (
    <ObservationStyled>
      <ClientItem />
      <div className="header">
        <h3>Observaciones</h3>
        <AddObservation id={id} />
      </div>
      <ObservationList id={id} />
    </ObservationStyled>
  );
};

export default Observations;
