import { useEffect } from "react";
import { usePersons } from "infraestructure/hooks/redux/usePersons";
import ClientCard from "./ClientCard";
import ListContainer from "./ListContainer.styled";

const ClientList = () => {
  const { personsList, refreshPersons } = usePersons();

  useEffect(() => {
    if (personsList.length <= 0) refreshPersons();
  }, []);

  return (
    <ListContainer>
      {personsList.length > 0 ? (
        personsList.map((person: any, index: number) => (
          <ClientCard key={index} data={person} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </ListContainer>
  );
};

export default ClientList;
