import React from "react";
import HomeFooter from "../../components/homeFooter/HomeFooter";
import { Navbar, Hero } from "./../../components/index";
export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Hero />
      <HomeFooter />
    </div>
  );
}
