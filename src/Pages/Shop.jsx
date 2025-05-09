import React from "react";
import NewCollections from "../Components/NewCollection/NewCollections";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/popular/popular";
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
