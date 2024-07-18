import React, { FC } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface BuyerLayoutProps {
  children: React.ReactNode;
}

const BuyerLayout: FC<BuyerLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default BuyerLayout;
