import { useDispatch, useSelector } from "react-redux";
import {
  apiAddObservation,
  apiDeleteObservation,
  apiGetObservationList,
} from "infraestructure/api/observations";
import {
  updateObservation,
  refreshObservationList,
  addObservation as addObservationAction,
  deleteObservation as deleteObservationAction,
} from "application/redux/reducers/observationSlice";
import {
  formatObservationToApi,
  formatObservationToRedux,
} from "infraestructure/gateways/format/observationReduxFormat";
import { IObservation } from "interfaces/observation";
import { RootState } from "application/redux/store";

const useObservations = () => {
  const dispatch = useDispatch();
  const observationsList = useSelector(
    (state: RootState) => state.observations.observationList
  );

  //Refresh observation list
  const refreshObservations = async () => {
    const data = await apiGetObservationList();
    const formatted: IObservation[] = data.map(formatObservationToRedux);
    dispatch(refreshObservationList(formatted));
  };

  //refresh once
  const refreshOnce = (observation: IObservation) => {
    dispatch(updateObservation(observation));
  };

  //AddObservation
  const addObservation = (observation: IObservation) => {
    apiAddObservation(formatObservationToApi(observation));
    dispatch(addObservationAction(observation));
  };

  //Delete observation
  const deleteObservation = (id: number) => {
    apiDeleteObservation(id);
    dispatch(deleteObservationAction(id));
  };

  return {
    observationsList,
    refreshObservations,
    addObservation,
    refreshOnce,
    deleteObservation,
  };
};

export { useObservations };
