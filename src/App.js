import { Fragment } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Fragment className="App">
      {/* <header>Header element</header>
      <nav>Nav element</nav>
      <main>Main element</main>
      <footer>Footer element</footer> */}
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
