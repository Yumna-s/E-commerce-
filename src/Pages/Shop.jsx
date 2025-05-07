import React from "react";
import NewCollections from "../Components/NewCollection/NewCollections";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

function Shop() {
  return (
    <div>
      <Hero />

      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
