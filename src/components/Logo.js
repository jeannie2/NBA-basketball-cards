import React from "react";
import logos from "./Logos";

function Logo(props) {
  return <img src={logos[props.logo]} alt="logo" />;
}

export default Logo;
