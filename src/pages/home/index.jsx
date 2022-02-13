import React from "react";

import {
  Navbar,
  Hero,
  Footer,
  OurProducts,
  Inspiration,
  HomeFooter,
  Tips,
} from "./../../components/index";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Hero />
      <HomeFooter />
      <OurProducts />
      <Inspiration />
      <Tips />
      <Footer />
    </div>
  );
}
