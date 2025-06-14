import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import littleLemonLogo from "../assets/images/Logo.svg";
import hamburgerMenuIcon from "../assets/images/hamburgerMenuIcon.svg";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/booking" },
  { name: "Order Online", path: "/orderonline" },
  { name: "Login", path: "/login" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleMenu = () => setIsSidebarOpen(!isSidebarOpen);
  const buttonRef = useRef(null);
  const sidebarRef = useRef(null);

  // Build Menu
  const MenuOptions = ({ menuOptions }) => {
    return (
      <Fragment
      // className="fade-in"
      // className={`navbar-links ${isSidebarOpen ? "active" : ""}`}
      >
        {menuOptions.map((menu) => {
          return (
            <NavLink
              className="navbarOption"
              key={menu.name}
              onClick={() => setIsSidebarOpen(false)}
              to={menu.path}
            >
              <span>{menu.name}</span>
            </NavLink>
          );
        })}
      </Fragment>
    );
  };

  // Handles when user clicks away the sidebar, to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav id="navbar">
      {/* This covers Desktop device */}
      <article className="navbarGrid">
        <section
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <button
            type="button"
            className="navbarMenuButton"
            onClick={toggleMenu}
            ref={buttonRef}
          >
            <img
              className="navbarMenuImage"
              src={hamburgerMenuIcon}
              alt="Menu"
            />
          </button>
          <section
            className={`sidebar ${isSidebarOpen ? "open" : ""}`}
            ref={sidebarRef}
          >
            <MenuOptions menuOptions={menuOptions} />
          </section>
        </section>
        <img className="navbarImage" src={littleLemonLogo} alt="Logo" />
        <section className="navbarOptions">
          <MenuOptions menuOptions={menuOptions} />
        </section>
      </article>
    </nav>
  );
}
