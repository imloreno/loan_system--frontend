import Button from "presentation/components/common/Button";
import Icons from "presentation/components/common/Icons";
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
        <Button type="info" className="client_button">
          <Icons type="details" className="client_button-icon" />
          <span>Detalles</span>
        </Button>
        <Button type="warning" className="client_button">
          <Icons type="edit" className="client_button-icon" />
          <span>Editar</span>
        </Button>
        <Button type="error" className="client_button">
          <Icons type="delete" className="client_button-icon" />
          <span>Eliminar</span>
        </Button>
      </div>
    </ClientStyled>
  );
};

export default Client;
