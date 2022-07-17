import { useDispatch, useSelector } from "react-redux";
import { apiGetObservationList } from "infraestructure/api/observations";
import {
  updateObservation,
  refreshObservationList,
} from "application/redux/reducers/observationSlice";
import { formatObservationToRedux } from "infraestructure/gateways/format/observationReduxFormat";
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

  return {
    observationsList,
    refreshObservations,
    refreshOnce,
  };
};

export { useObservations };
