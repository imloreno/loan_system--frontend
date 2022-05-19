import Button from "presentation/components/common/Button";
import HeaderPage from "presentation/components/layout/HeaderPage";
import ClientList from "./ClientList";
import StyledClientsSection from "./ClientsSection.styled";
import AddClient from "./ClientList/AddClient";

type Props = {};

const Clients = (props: Props) => {
  return (
    <main>
      <HeaderPage>
        <AddClient />
        <Button>Filtros</Button>
      </HeaderPage>
      <StyledClientsSection>
        <ClientList />
      </StyledClientsSection>
    </main>
  );
};

export default Clients;
