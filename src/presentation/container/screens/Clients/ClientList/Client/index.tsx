import ClientStyled from "./Client.styled";

import { IPerson } from "interfaces/person";
import UpdateClient from "./UpdateClient";
import DeleteClient from "./DeleteClient";
import IconInfo from "presentation/components/common/Client/IconInfo";
import DetailsClient from "./DetailsClient";

const Client = (props: IPerson) => {
  const { id, nombres, apellidos, ci } = props;
  return (
    <ClientStyled>
      <IconInfo title={`${nombres} ${apellidos}`} description={ci.join("")} />
      <div className="client_options">
        <DetailsClient id={id || 0} />
        <UpdateClient data={props} />
        <DeleteClient id={id || 0} />
      </div>
    </ClientStyled>
  );
};

export default Client;
