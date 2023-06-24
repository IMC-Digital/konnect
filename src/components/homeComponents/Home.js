import React from "react";
import HeroSection from "./HeroSection";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

const Home = () => {
  return (
    <div>
      <div className="">
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    </div>
  );
};

export default Home;