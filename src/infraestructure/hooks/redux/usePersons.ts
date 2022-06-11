import { useDispatch, useSelector } from "react-redux";
import { apiGetPersonList } from "infraestructure/api/person";
import { refreshPersonList } from "application/redux/reducers/personSlice";
import { fortmatToRedux } from "infraestructure/gateways/format/reduxFormat";
import { IPerson } from "interfaces/person";
import { RootState } from "application/redux/store";

const usePersons = () => {
  const dispatch = useDispatch();
  const personsList = useSelector(
    (state: RootState) => state.persons.personList
  );

  const refreshPersons = async () => {
    const data = await apiGetPersonList();
    const formatted: IPerson[] = data.map(fortmatToRedux);
    dispatch(refreshPersonList(formatted));
  };

  return {
    personsList,
    refreshPersons,
  };
};

export { usePersons };
