import { IObservation } from "interfaces/observation";

const formatObservationToRedux = (observation: any): IObservation => {
  const { observacion, tipo_observacion, estado, persona, id } = observation;
  return {
    id: id,
    observation: observacion,
    observation_type: tipo_observacion,
    status: estado,
    id_person: persona.id_persona,
  };
};

export { formatObservationToRedux };
