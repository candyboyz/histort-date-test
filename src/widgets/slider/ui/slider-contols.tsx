import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useSwiper } from "swiper/react";

type SliderControlProps = {
  slides: {
    year: number;
    description: string;
  }[];
};

export const SliderControl = ({ slides }: SliderControlProps) => {
  const swiper = useSwiper();

  const [progress, setProgress] = useState(swiper.progress);

  swiper.on("progress", (swiper) => {
    setProgress(swiper.progress);
  });

  return (
    <div
      className="swiper-controls-container"
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        padding: "0 10px 0 10px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
      }}>
      <div>
        <button
          style={{
            borderRadius: "100%",
            display: progress <= 0 ? "none" : "flex",
            alignItems: "center",
            border: "none",
            background: "#fff",
            boxShadow: "0px 0px 15px 0px #3877EE1A",
            color: "#3877EE",
            padding: 8,
          }}
          onClick={() => {
            swiper.slidePrev();
          }}>
          <ChevronLeft />
        </button>
      </div>
      <div>
        <button
          style={{
            borderRadius: "100%",
            display: progress >= 1 ? "none" : "flex",
            alignItems: "center",
            border: "none",
            background: "#fff",
            boxShadow: "0px 0px 15px 0px #3877EE1A",
            color: "#3877EE",
            padding: 8,
          }}
          onClick={() => {
            swiper.slideNext();
          }}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
