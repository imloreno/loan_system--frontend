import ClientItem from "presentation/components/common/ClientItem";
import Container from "./ClientCard.styled";

type Props = {};

const ClientCard = (props: Props) => {
  return (
    <Container>
      <header>
        <h2>Lorenzo Santiago Saul Arias Villegas</h2>
        <p className="subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="date">12/03/1998</p>
      </header>
      <ClientItem />
      <div className="footer">Footer</div>
    </Container>
  );
};

export default ClientCard;
