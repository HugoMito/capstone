import { Fragment } from "react";
import littleLemonLogo from "../assets/images/Logo.svg";

export default function Header() {
  return (
    <Fragment>
      <h1>Header component</h1>
      <img src={littleLemonLogo} alt="Logo" />
    </Fragment>
  );
}
