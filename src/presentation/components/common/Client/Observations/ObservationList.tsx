import React, { useEffect } from "react";
import { useObservations } from "infraestructure/hooks/redux/useObservations";
import { IObservation } from "interfaces/observation";
import ObservationItem from "./ObservationItem";

type Props = {};

const ObservationList = (props: Props) => {
  const { observationsList, refreshObservations } = useObservations();

  useEffect(() => {
    observationsList.length <= 0 && refreshObservations();
  }, [observationsList.length, refreshObservations]);

  return (
    <ul>
      {observationsList.length > 0 &&
        observationsList.map((observation: IObservation, index) => (
          <ObservationItem key={index} />
        ))}
    </ul>
  );
};

export default ObservationList;
