import Button from "presentation/components/common/Button.styled";
import HeaderPage from "presentation/components/layout/HeaderPage";

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
    </main>
  );
};

export default Clients;
