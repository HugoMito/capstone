import { useLocation, useNavigate } from "react-router-dom";
import htmlParser from "html-react-parser";

import restaurant from "../assets/images/restaurantSmall.png";
import restaurantFood from "../assets/images/restauranFoodSmall.png";
import greekSalad from "../assets/images/greekSaladSmall.png";
import lemonDessert from "../assets/images/lemonDessertSmall.jpg";
import chefs from "../assets/images/chefsSmall.png";
import chef from "../assets/images/chefSmall.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const pagesInformation = [
    {
      path: "/",
      image: restaurant,
      description:
        "We are a family owned<br /><i>Mediterranean</i> restaurant,<br />focused on traditional<br />recipes served with a <i>modern</i><br />twist.",
      buttonLabel: "Reserve a Table",
    },
    {
      path: "/about",
      image: greekSalad,
      description:
        "Welcome to <b><i><u>About</u></i></b> page.<br/><br/>👉🏼 This page is out of Capstone Project scope.<br/>👉🏼 Placeholder will remain available.",
      buttonLabel: "Home",
    },
    {
      path: "/menu",
      image: lemonDessert,
      description:
        "Welcome to <b><i><u>Menu</u></i></b> page.<br/><br/>👉🏼 This page is out of Capstone Project scope.<br/>👉🏼 Placeholder will remain available.",
      buttonLabel: "Home",
    },
    {
      path: "/booking",
      image: restaurantFood,
      description:
        "Welcome to <b><i><u>Reservations</u></i></b> page.<br/>👉🏼 Enter you reservation details.<br/>👉🏼 Then, press Make your reservation button.<br/>👉🏼 Address any potential error in the form.",
      buttonLabel: "Home",
    },
    {
      path: "/orderonline",
      image: chefs,
      description:
        "Welcome to <b><i><u>Order Online</u></i></b> page.<br/><br/>👉🏼 This page is out of Capstone Project scope.<br/>👉🏼 Placeholder will remain available.",
      buttonLabel: "Home",
    },
    {
      path: "/login",
      image: chef,
      description:
        "Welcome to <b><i><u>Login</u></i></b> page.<br/><br/>👉🏼 This page is out of Capstone Project scope.<br/>👉🏼 Placeholder will remain available.",
      buttonLabel: "Home",
    },
  ];
  const pageInformation = pagesInformation.find((page) => page.path === path);

  // Navigate to the home page
  const hnd_Click = () => {
    if (path === "/") {
      navigate("/booking");
    } else {
      navigate("/");
    }
  };

  return (
    <center className="headerCenter" id="header">
      <main className="headerGrid">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <span
            style={{
              color: "var(--ll-color-yellow)",
              fontFamily: "var(--ff-markazi)",
              fontWeight: "var(--fw-markazi-normal)",
              fontSize: "3.4rem",
              height: "2.875rem",
              marginTop: "1rem",
            }}
          >
            Little Lemon
          </span>
          <span
            style={{
              color: "white",
              fontFamily: "var(--ff-markazi)",
              fontWeight: "var(--fw-markazi-thin)",
              fontSize: "2.1rem",
              marginTop: "0.2rem",
              padding: 0,
            }}
          >
            Chicago
          </span>
          <article
            className="fade-in"
            key={path}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{
                color: "white",
                fontFamily: "var(--ff-karla)",
                fontWeight: "var(--fw-karla-normal)",
                fontSize: "1.16rem",
                marginTop: "0.5rem",
              }}
            >
              {htmlParser(pageInformation.description)}
            </span>
            <button className="headerButton" onClick={hnd_Click}>
              {pageInformation.buttonLabel}
            </button>
          </article>
        </section>
        <section className="headerImageContainer fade-in" key={path}>
          <img src={pageInformation.image} alt="PageImage" width="200px" />
        </section>
      </main>
    </center>
  );
}
