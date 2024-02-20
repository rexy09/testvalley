"use client";
import { useRef } from "react";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useHomeService } from "../services/services";
import { BannerData } from "../services/types";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function Banner() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [banners, setBanners] = useState<BannerData[]>([]);
  const [_isLoading, setLoading] = useState(false);
  const matches = useMediaQuery("(min-width: 62em)");

  const { getBanner } = useHomeService();

  const fetchData = () => {
    getBanner()
      .then(function (response) {
        const responseData = response.data;

        setBanners(responseData);
        setLoading(false);
      })
      .catch(function (_error) {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const rows = banners.map((row, index) => (
    <Carousel.Slide key={index}>
      <Image src={row.pcImageUrl} alt={row.title} />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      withIndicators
      slideSize={matches ? "50%" : "100%"}
      slideGap="xl"
      loop
      controlsOffset={matches ? "27%" : "5%"}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {rows}
    </Carousel>
  );
}
