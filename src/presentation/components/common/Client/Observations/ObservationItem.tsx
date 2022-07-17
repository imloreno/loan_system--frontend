import React from "react";
import MiniButton from "presentation/components/common/Button/MiniButton";
import Icons from "../../Icons";

const ObservationItem = () => {
  return (
    <li className="observation-item">
      <span>Item</span>
      <MiniButton>
        <Icons type="less" />
      </MiniButton>
    </li>
  );
};

export default ObservationItem;
