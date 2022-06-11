import Client from "./Client.styled";
import ClientProgress from "./ClientProgress";

type Props = {};

const ClientItem = (props: Props) => {
  return (
    <Client>
      <div className="progress">
        <p className="percentage">30%</p>
        <p className="">(100bs / 250bs)</p>
      </div>
      <ClientProgress total={12} progress={5} />
      <div className="features">
        <div>Perfil</div>
        <div>Saldo</div>
        <div>Pagado</div>
      </div>
    </Client>
  );
};

export default ClientItem;
