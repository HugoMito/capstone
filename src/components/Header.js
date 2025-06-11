import restaurantFood from "../assets/images/restauranfood.jpg";

export default function Header() {
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
              fontWeight: "var(--fw-markazi-bold)",
              fontSize: "4rem",
              marginTop: "10px",
            }}
          >
            Little Lemon
          </span>
          <span
            style={{
              color: "white",
              fontFamily: "var(--ff-markazi)",
              fontWeight: "var(--fw-markazi-normal)",
              fontSize: "2.5rem",
              marginTop: "0",
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
              fontSize: "1rem",
            }}
          >
            Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </section>
        <section>
          <img src={restaurantFood} alt="Restaurant" width="200px" />
        </section>
      </main>
    </center>
  );
}
