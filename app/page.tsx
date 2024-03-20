'use client'

import Container from "./templates/default/container";
import React from "react";
import Banner from "./templates/default/pages/home/Banner";
import AllProducts from "./templates/default/pages/home/AllProducts";

export default function Home() {
  return (
    <Container>
      <Banner />
      <AllProducts/>
    </Container>
  );
}
