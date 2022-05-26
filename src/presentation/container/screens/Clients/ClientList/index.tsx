import React from "react";
import Client from "./Client";

type Props = {};

const ClientList = (props: Props) => {
  return (
    <ul>
      <Client />
      <Client />
      <Client />
      <Client />
    </ul>
  );
};

export default ClientList;
