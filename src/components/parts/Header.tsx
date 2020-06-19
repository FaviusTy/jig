import React, { memo } from "React";
import { css } from "goober";
import c from "../../className";

const Style = css`
  width: 100%;
  height: 90px;
`;

export default memo(function Header(props: any) {
  const { className = "", ...rest } = props;

  return <header className={c(Style, className)} {...rest}></header>;
});
