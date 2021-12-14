import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureEl";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1> Coffee Combo Special</h1>
      <p> Cold Crew Mix & Iced Coffee </p>
      <h3> $6.00</h3>
      <FeatureButton>Order now!</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
