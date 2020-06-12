import React, { memo } from "react";
import {css} from "goober";

const style = css`
width: 100%;
`

export default memo(function Root(props) {
  return <div className={style}>Hello World!</div>;
});
