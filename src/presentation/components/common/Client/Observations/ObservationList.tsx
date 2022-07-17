import React, { useEffect } from "react";
import { useObservations } from "infraestructure/hooks/redux/useObservations";
import { IObservation } from "interfaces/observation";
import ObservationItem from "./ObservationItem";

type Props = {
  id: number;
};

const ObservationList = (props: Props) => {
  const { observationsList, refreshObservations } = useObservations();

  useEffect(() => {
    observationsList.length <= 0 && refreshObservations();
  }, [observationsList.length, refreshObservations]);

  return (
    <ul>
      {observationsList.length > 0 &&
        observationsList
          .filter((ob: IObservation) => ob.id_person === props.id)
          .map((observation: IObservation, index) => (
            <ObservationItem
              key={index}
              observation={observation}
              id={observation.id}
            />
          ))}
    </ul>
  );
};

export default ObservationList;
