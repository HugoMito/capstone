import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import littleLemonLogo from "../assets/images/Logo.svg";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/booking" },
  { name: "Order Online", path: "/orderonline" },
  { name: "Login", path: "/login" },
];

export default function Navbar() {
  // Build Menu
  const MenuOptions = ({ menuOptions }) => {
    return (
      <Fragment>
        {menuOptions.map((menu) => {
          return (
            // <Link className="navbarOptions" key={menu.name} to={menu.path}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbarOption active" : "navbarOption"
              }
              key={menu.name}
              to={menu.path}
            >
              <span>{menu.name}</span>
            </NavLink>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <center>
        <main className="navbarGrid">
          <section className="navbarLogo">
            <img className="navbarImage" src={littleLemonLogo} alt="Logo" />
          </section>
          <section className="navbarOptions">
            <MenuOptions menuOptions={menuOptions} />
          </section>
        </main>
      </center>
    </Fragment>
  );
}
