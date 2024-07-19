"use client";
import Autoplay from "embla-carousel-autoplay";
import React, { FC, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ImageCarouselProps {
  showButton?: boolean;
  dataImages: ReactNode[];
  isLoop?: boolean;
  delay?: number;
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  showButton,
  dataImages,
  delay = 2000,
  isLoop = true,
}) => {
  return (
    <Carousel
      opts={{
        loop: isLoop,
      }}
      plugins={[
        Autoplay({
          delay: delay,
        }),
      ]}
    >
      <CarouselContent>
        {dataImages &&
          dataImages.map((item, idx) => (
            <CarouselItem key={idx}>
              {item}
            </CarouselItem>
          ))}
      </CarouselContent>
      {showButton && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default ImageCarousel;
