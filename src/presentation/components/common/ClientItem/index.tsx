import Client from "./Client.styled";
import ClientProgress from "./ClientProgress";

type Props = {};

const ClientItem = (props: Props) => {
  return (
    <Client>
      <div className="progress">
        <p>30%</p>
        <p>(100bs de 250bs)</p>
      </div>
      <ClientProgress total={30} progress={20} />
      <div className="features">
        <div>Perfil</div>
        <div>Saldo</div>
        <div>Pagado</div>
      </div>
    </Client>
  );
};

export default ClientItem;
