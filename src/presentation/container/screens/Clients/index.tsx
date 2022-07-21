import Button from "presentation/components/common/Button";
import HeaderPage from "presentation/components/layout/HeaderPage";
import ClientList from "./ClientList";
import AddClient from "./ClientList/Client/AddClient";
import StyledClientsSection from "./ClientsSection.styled";

type Props = {};

const Clients = (props: Props) => {
  return (
    <main>
      <h1 className="title">Gestión de clientes</h1>
      <br />
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
