import Button from "presentation/components/common/Button";
import HeaderPage from "presentation/components/layout/HeaderPage";
import ClientList from "./ClientList";
import StyledClientsSection from "./ClientsSection.styled";

type Props = {};

const Clients = (props: Props) => {
  return (
    <main>
      <HeaderPage>
        <Button onClick={() => alert("Hola como estas")}>
          Agregar un cliente
        </Button>
        <Button>Filtros</Button>
      </HeaderPage>
      <StyledClientsSection>
        <ClientList />
      </StyledClientsSection>
    </main>
  );
};

export default Clients;
