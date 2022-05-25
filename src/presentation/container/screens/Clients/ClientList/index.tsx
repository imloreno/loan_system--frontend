import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshPersonList } from "application/redux/reducers/personSlice";

import { RootState } from "application/redux/store";
import { IPerson } from "interfaces/person";

import { apiGetPersonList } from "infraestructure/api/person";
import Client from "./Client";

const ClientList = () => {
  const persons = useSelector((state: RootState) => state.persons.personList);
  const dispatch = useDispatch();

  useEffect(() => {
    const callback = (personList: IPerson[]) => {
      dispatch(refreshPersonList(personList));
    };
    apiGetPersonList(callback);
  }, [dispatch]);

  return (
    <ul>
      {persons.map((person: IPerson, index: number) => (
        <Client key={person.id + index} {...person} />
      ))}
    </ul>
  );
};

export default ClientList;
