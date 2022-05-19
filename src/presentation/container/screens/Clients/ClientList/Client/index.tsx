import Button from "presentation/components/common/Button";
import ClientStyled from "./Client.styled";

type Props = {};

const Client = (props: Props) => {
  return (
    <ClientStyled>
      <div className="client_data">
        <img
          src="https://gaveinjaz.com/wp-content/uploads/2019/12/opulent-profile-square-07.jpg"
          alt="Lorenzo"
        />
        <h4>Lorenzo Arias Villegas</h4>
        <p>Calle bolivar S/N</p>
      </div>
      <div className="client_options">
        <Button type="info">Detalles</Button>
        <Button type="warning">Editar</Button>
        <Button type="error">Eliminar</Button>
      </div>
    </ClientStyled>
  );
};

export default Client;
