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

const formatObservationToApi = (props: IObservation) => {
  const { observation, observation_type, status, id_person, id } = props;
  return {
    id: id,
    observacion: observation,
    tipo_observacion: observation_type,
    estado: status,
    persona: {
      id_persona: id_person,
    },
  };
};

export { formatObservationToRedux, formatObservationToApi };
