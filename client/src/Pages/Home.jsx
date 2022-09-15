import React from "react";
import Anouncement from "../components/Anouncement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
    </div>
  );
}
