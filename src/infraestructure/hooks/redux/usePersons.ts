import { useDispatch, useSelector } from "react-redux";
import { apiGetPersonList } from "infraestructure/api/person";
import {
  refreshPersonList,
  updatePerson,
} from "application/redux/reducers/personSlice";
import { fortmatToRedux } from "infraestructure/gateways/format/reduxFormat";
import { IPerson } from "interfaces/person";
import { RootState } from "application/redux/store";

const usePersons = () => {
  const dispatch = useDispatch();
  const personsList = useSelector(
    (state: RootState) => state.persons.personList
  );

  //Refresh person list
  const refreshPersons = async () => {
    const data = await apiGetPersonList();
    const formatted: IPerson[] = data.map(fortmatToRedux);
    dispatch(refreshPersonList(formatted));
  };

  //refresh once
  const refreshOnce = (person: IPerson) => {
    dispatch(updatePerson(person));
  };

  return {
    personsList,
    refreshPersons,
    refreshOnce,
  };
};

export { usePersons };
