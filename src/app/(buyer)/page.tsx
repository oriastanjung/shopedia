import HeroSection from "@/components/organism/BuyerHomePage/HeroSection";
import React, { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main className="lg:container lg:mx-auto lg:my-5 w-full min-h-screen">
      <HeroSection />
    </main>
  );
};

export default HomePage;
