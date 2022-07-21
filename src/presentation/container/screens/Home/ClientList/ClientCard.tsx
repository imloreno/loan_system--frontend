import { IPerson } from "interfaces/person";
import ClientItem from "presentation/components/common/Client/ClientItem";
import Container from "./ClientCard.styled";

type Props = {
  data: IPerson;
};

const ClientCard = (props: Props) => {
  const { nombres, apellidos, ci, fecha_nacimiento } = props.data;
  return (
    <Container>
      <header>
        <h2>
          {nombres} {apellidos}
        </h2>
        <p className="subtitle">{ci.join("")}</p>
        <p className="date">{fecha_nacimiento}</p>
      </header>
      <ClientItem />
      <div className="footer">Footer</div>
    </Container>
  );
};

export default ClientCard;
