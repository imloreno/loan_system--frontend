import ClientCard from "./ClientCard";
import ListContainer from "./ListContainer.styled";

const ClientList = () => {
  return (
    <ListContainer>
      <ClientCard />
      <ClientCard />
      <ClientCard />
    </ListContainer>
  );
};

export default ClientList;
