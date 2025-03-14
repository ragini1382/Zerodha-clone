import React from "react";
import LeftSection from "./LeftSection";
import Hero from "./Hero";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="kite"
              productDescription="Our ultra-fast flagship trading platform with streaming market data, 
        advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <Universe />
    </>
  );
}

export default ProductPage;
