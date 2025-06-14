import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import htmlParser from "html-react-parser";

import { Box, Grid } from "@mui/material";
import greekSalad from "../assets/images/greekSaladSmall.png";
import bruschetta from "../assets/images/bruschetta.svg";
import lemonDessert from "../assets/images/lemonDessertSmall.jpg";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export default function Home() {
  const navigate = useNavigate();
  const [availableHeight, setAvailableHeight] = useState("100vh");

  useEffect(() => {
    const navHeight = document.getElementById("navbar")?.offsetHeight || 0;
    const headerHeight = document.getElementById("header")?.offsetHeight || 0;
    const totalOffset = navHeight + headerHeight;

    setAvailableHeight(`calc(100vh - ${totalOffset}px)`);
  }, []);

  const articles = [
    {
      image: greekSalad,
      dish: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      image: bruschetta,
      dish: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil<br/><br/>",
    },
    {
      image: lemonDessert,
      dish: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.<br/><br/>",
    },
  ];

  // Navigate to the home page
  const hnd_Click = () => {
    navigate("/menu");
  };

  return (
    <main id="homeMain" style={{ minHeight: availableHeight }}>
      <article>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid size={{ xs: 12 }} sx={{ height: "5.625rem" }} />

            <Grid size={{ xs: 12, md: 2 }} />
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid
                container
                size={{ xs: 12 }}
                spacing={5}
                sx={{ padding: "0 0.5rem" }}
              >
                <Grid
                  key="1"
                  size={{ xs: 12, md: 8 }}
                  sx={{
                    borderRadius: "1rem 1rem 0 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--ff-markazi)",
                      fontSize: "4rem",
                      fontWeight: "var(--fw-markazi-thin)",
                    }}
                  >
                    This week specials!
                  </span>
                </Grid>
                <Grid
                  display={"flex"}
                  justifyContent={"right"}
                  key="title2"
                  size={{ xs: 12, md: 4 }}
                  sx={{
                    borderRadius: "1rem 1rem 0 0",
                    // display: "flex",
                    // justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--ll-color-mamey)",
                      fontFamily: "var(--ff-markazi)",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    <button className="homeButton" onClick={hnd_Click}>
                      Online menu
                    </button>
                  </span>
                  {/* </Box> */}
                </Grid>

                {articles.map((article, index) => (
                  <Grid
                    key={index}
                    size={{ xs: 12, md: 4 }}
                    sx={{
                      backgroundColor: "var(--ll-color-beige)",
                      borderRadius: "1rem 1rem 0 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <article
                      style={{
                        width: "100%",
                        fontFamily: "var(--ff-karla)",
                        fontWeight: "normal",
                      }}
                    >
                      <section
                        className="homeImageContainer fade-in"
                        key={article.dish}
                      >
                        <img src={article.image} alt="Dish" />
                      </section>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{ padding: "0 1.5rem" }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--ff-markazi)",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginTop: "1.5rem",
                          }}
                        >
                          {article.dish}
                        </span>
                        <span
                          style={{
                            color: "var(--ll-color-mamey)",
                            fontFamily: "var(--ff-markazi)",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginTop: "1.5rem",
                          }}
                        >
                          {article.price}
                        </span>
                      </Box>
                      <p style={{ padding: "0 1.5rem", margin: "1rem 0" }}>
                        {htmlParser(article.description)}
                      </p>

                      <Box
                        style={{
                          alignItems: "center",
                          display: "flex",
                          margin: "1.5rem 0 2rem 0",
                          padding: "0 1.5rem",
                        }}
                      >
                        <span style={{ marginRight: "0.5rem" }}>
                          Order a delivery
                        </span>
                        <DeliveryDiningIcon sx={{ fontSize: "1.3rem" }} />
                      </Box>
                    </article>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 2 }} />
          </Grid>
        </Box>
      </article>
    </main>
  );
}
