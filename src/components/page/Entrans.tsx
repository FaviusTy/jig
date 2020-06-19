import React, { memo } from "react";
import c from "../../className";
import { RihgtAligned, Centering } from "../styles/flex";
import { FullSize } from "../styles/sizing";

export default memo(function Entrans() {
  return (
    <div className={c(FullSize, RihgtAligned)}>
      <div className={c(FullSize, Centering)}>Hello</div>
    </div>
  );
});
