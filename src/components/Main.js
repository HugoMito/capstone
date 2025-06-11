import { Fragment } from "react";
// import homeIcon from "../assets/images/home icon.svg";

const restaurants = [
  // {
  //   id: "rest1",
  //   title: "The Gourmet Kitchen",
  //   location: "New York",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "rest2",
  //   title: "Seafood Paradise",
  //   location: "San Francisco",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "rest3",
  //   title: "Pasta House",
  //   location: "Rome",
  //   image: "https://images.unsplash.com/photo-1523983303491-3b0b6d1e4f0b",
  // },
  {
    id: "rest4",
    title: "Sushi World",
    location: "Tokyo",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    id: "rest5",
    title: "Burger Hub",
    location: "Los Angeles",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: "rest6",
    title: "Taco Fiesta",
    location: "Mexico City",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  // {
  //   id: "rest7",
  //   title: "Vegan Delight",
  //   location: "Berlin",
  //   image: "https://images.unsplash.com/photo-1526318472351-3d5f4ec86e4a",
  // },
  // {
  //   id: "rest8",
  //   title: "Steakhouse Prime",
  //   location: "Sydney",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "rest9",
  //   title: "Curry Corner",
  //   location: "Mumbai",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "rest10",
    title: "Dim Sum House",
    location: "Hong Kong",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  // {
  //   id: "rest11",
  //   title: "French Bistro",
  //   location: "Paris",
  //   image: "https://images.unsplash.com/photo-1523983303491-3b0b6d1e4f0b",
  // },
  // {
  //   id: "rest12",
  //   title: "Mediterranean Flavors",
  //   location: "Athens",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "rest13",
    title: "BBQ Pit",
    location: "Houston",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  // {
  //   id: "rest14",
  //   title: "Vegetarian Vibes",
  //   location: "Bangkok",
  //   image: "https://images.unsplash.com/photo-1526318472351-3d5f4ec86e4a",
  // },
  // {
  //   id: "rest15",
  //   title: "Pizzeria Bella",
  //   location: "Naples",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "rest16",
  //   title: "Seafood Shack",
  //   location: "Sydney",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "rest17",
    title: "Sushi & Ramen",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  // {
  //   id: "rest18",
  //   title: "Tapas Bar",
  //   location: "Madrid",
  //   image: "https://images.unsplash.com/photo-1523983303491-3b0b6d1e4f0b",
  // },
  // {
  //   id: "rest19",
  //   title: "Bakery Bliss",
  //   location: "Vienna",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "rest20",
  //   title: "Steak & Wine",
  //   location: "Buenos Aires",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },

  // {
  //   id: "nr1",
  //   title: "La Petite Cuisine",
  //   location: "Lyon",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "nr2",
  //   title: "The Vegan Bistro",
  //   location: "Sydney",
  //   image: "https://images.unsplash.com/photo-1528717751003-d6ec0e9bd51f",
  // },
  // {
  //   id: "nr3",
  //   title: "Pasta & Co.",
  //   location: "Venice",
  //   image: "https://images.unsplash.com/photo-1576765607924-1e8fba8de8b0",
  // },
  // {
  //   id: "nr4",
  //   title: "Steakhouse Grill",
  //   location: "Buenos Aires",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "nr5",
    title: "Seafood & Sushi",
    location: "Bangkok",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  // {
  //   id: "nr6",
  //   title: "Italian Classics",
  //   location: "Rome",
  //   image: "https://images.unsplash.com/photo-1528717751003-d6ec0e9bd51f",
  // },
  {
    id: "nr7",
    title: "Taco Fiesta",
    location: "Mexico City",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  // {
  //   id: "nr8",
  //   title: "Bakery Delights",
  //   location: "Vienna",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "nr9",
    title: "Asian Fusion",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  // {
  //   id: "nr10",
  //   title: "French Bistro",
  //   location: "Paris",
  //   image: "https://images.unsplash.com/photo-1523983303491-3b0b6d1e4f0b",
  // },
  // {
  //   id: "nr11",
  //   title: "Mediterranean Flavors",
  //   location: "Athens",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "nr12",
    title: "BBQ House",
    location: "Houston",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  // {
  //   id: "nr13",
  //   title: "Vegan Paradise",
  //   location: "Berlin",
  //   image: "https://images.unsplash.com/photo-1526318472351-3d5f4ec86e4a",
  // },
  // {
  //   id: "nr14",
  //   title: "Seafood Shack",
  //   location: "Sydney",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "nr15",
  //   title: "Pizzeria Napoli",
  //   location: "Naples",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "nr16",
    title: "Sushi & Ramen",
    location: "Tokyo",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  // {
  //   id: "nr17",
  //   title: "Tapas & More",
  //   location: "Madrid",
  //   image: "https://images.unsplash.com/photo-1523983303491-3b0b6d1e4f0b",
  // },
  // {
  //   id: "nr18",
  //   title: "Traditional Indian",
  //   location: "Mumbai",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  // {
  //   id: "nr19",
  //   title: "Steak & Wine",
  //   location: "Buenos Aires",
  //   image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  // },
  {
    id: "nr20",
    title: "Curry House",
    location: "Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
];

export default function Main() {
  const ListRestaurants = ({ restaurants }) => {
    return (
      <main
        style={{
          // //  ╔═╗ ╦   ╔═╗  ╦ ╦ ╔╗  ╔═╗  ╦ ╦      ╦   ╔═╗ ╦ ╦ ╔═╗ ╦ ╦ ╔╦╗
          // //  ╠╣  ║   ║╣  ╔╩╦╝ ╠╩╗ ║ ║ ╔╩╦╝      ║   ╠═╣ ╚╦╝ ║ ║ ║ ║  ║
          // //  ╚   ╩═╝ ╚═╝ ╩ ╩  ╚═╝ ╚═╝ ╩ ╩       ╩═╝ ╩ ╩  ╩  ╚═╝ ╚═╝  ╩
          // display: "flex",
          // flexWrap: "wrap",
          // gap: "40px",
          // justifyContent: "center",

          //  ╔═╗ ╦═╗ ╦ ╔╦╗      ╦   ╔═╗ ╦ ╦ ╔═╗ ╦ ╦ ╔╦╗
          //  ║ ╦ ╠╦╝ ║  ║║      ║   ╠═╣ ╚╦╝ ║ ║ ║ ║  ║
          //  ╚═╝ ╩╚═ ╩ ═╩╝      ╩═╝ ╩ ╩  ╩  ╚═╝ ╚═╝  ╩
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)", // 12 columns
          gap: "5px",
          justifyContent: "center", // optional: center the grid
          margin: "0 10px",
          // maxWidth: "1200px",
        }}
      >
        {restaurants.map((rest) => (
          <article
            key={rest.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              gridColumn: "span 2",
              overflow: "hidden",
              // width: "200px",
              // maxWidth: "200px",
            }}
          >
            <img
              src={rest.image}
              alt={rest.title}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />
            <div style={{ padding: "8px" }}>
              <p style={{ margin: "0 0 8px" }}>{rest.title}</p>
              <p style={{ margin: 0, fontSize: "0.9em", color: "#555" }}>
                {rest.location}
              </p>
            </div>
          </article>
        ))}
      </main>
    );
  };

  return (
    <Fragment>
      <h1>Main component</h1>
      <ListRestaurants restaurants={restaurants} />
    </Fragment>
  );
}
