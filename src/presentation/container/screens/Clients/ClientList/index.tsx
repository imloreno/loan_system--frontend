import { useEffect } from "react";

import { IPerson } from "interfaces/person";
import { usePersons } from "infraestructure/hooks/redux/usePersons";

import Client from "./Client";

const ClientList = () => {
  const { personsList, refreshPersons } = usePersons();

  useEffect(() => {
    personsList.length <= 0 && refreshPersons();
  }, []);

  return (
    <ul>
      {personsList.map((person: IPerson, index: number) => (
        <Client key={index} {...person} />
      ))}
    </ul>
  );
};

export default ClientList;
