import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import "./App.css";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />

          <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
