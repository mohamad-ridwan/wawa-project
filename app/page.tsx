'use client'

import Container from "./components/container";
import React from "react";
import Banner from "./components/Banner";
import AllProducts from "./components/AllProducts";

export default function Home() {
  return (
    <Container>
      <Banner />
      <AllProducts />
    </Container>
  );
}
