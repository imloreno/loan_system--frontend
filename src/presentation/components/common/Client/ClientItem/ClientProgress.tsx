import React from "react";

type Props = {
  progress: number;
  total: number;
};

const ClientProgress = (props: Props) => {
  const { progress, total } = props;
  const Items: number[] = [];
  for (let i = 1; i <= (total === 0 ? 1 : total); i++) {
    Items.push(i);
  }
  return (
    <ul>
      {Items.map((item) => (
        <li key={item} className={item > progress ? "none" : ""}></li>
      ))}
    </ul>
  );
};

export default ClientProgress;
