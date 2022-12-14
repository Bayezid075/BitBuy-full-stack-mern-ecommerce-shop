import React from "react";
import Anouncement from "../components/Anouncement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLatter />
      <Footer />
    </div>
  );
}
