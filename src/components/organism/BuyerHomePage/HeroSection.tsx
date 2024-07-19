import ImageCarousel from "@/components/atom/ImageCarousel";
import Image from "next/image";
import React, { FC } from "react";

interface HeroSectionProps {}

const dataImages = [
  <Image
    key={"hero-1"}
    src={"/hero-1.png"}
    alt="hero"
    width={1300}
    height={594}
    quality={100}
    className="w-full h-80 md:h-96 lg:h-[37.125rem] object-cover object-center"
  />,
  <Image
    key={"hero-2"}
    src={"/hero-2.png"}
    alt="hero"
    width={1300}
    height={594}
    quality={100}
    className="w-full h-80 md:h-96 lg:h-[37.125rem] object-cover object-center"
  />,
  <Image
    key={"hero-3"}
    src={"/hero-3.png"}
    alt="hero"
    width={1300}
    height={594}
    quality={100}
    className="w-full h-80 md:h-96 lg:h-[37.125rem] object-cover object-center"
  />,
];

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="lg:rounded-3xl overflow-hidden">
      <ImageCarousel dataImages={dataImages} delay={2000} isLoop />
    </section>
  );
};

export default HeroSection;
