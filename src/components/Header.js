import { useNavigate } from "react-router-dom";
import restaurantFood from "../assets/images/restauranfood.jpg";

export default function Header() {
  const navigate = useNavigate();

  const hnd_Click = () => {
    // Navigate to the home page
    navigate("/booking");
  };

  return (
    <center className="headerCenter">
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
          <span
            style={{
              color: "white",
              fontFamily: "var(--ff-karla)",
              fontWeight: "var(--fw-karla-normal)",
              fontSize: "1.16rem",
              marginTop: "0.5rem",
            }}
          >
            We are a family owned
            <br />
            Mediterranean restaurant,
            <br />
            focused on traditional
            <br />
            recipes served with a modern
            <br />
            twist.
          </span>
          <button className="headerButton" onClick={hnd_Click}>
            Reserve a Table
          </button>
        </section>
        <section className="headerImageContainer">
          <img src={restaurantFood} alt="Restaurant" width="200px" />
        </section>
      </main>
    </center>
  );
}
