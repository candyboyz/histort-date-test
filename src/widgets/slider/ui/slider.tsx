import { SliderCard } from "@/entities/slider-card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderControl } from "./slider-contols";
import { AnimatePresence, motion } from "framer-motion";

type SliderProps = {
  slides?: { year: number; description: string }[];
};

export const Slider = ({ slides }: SliderProps) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {slides && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { ease: "easeOut", duration: 0.5, delay: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          key={slides[0].year + "motion"}>
          <Swiper
            style={{
              position: "unset",
              margin: "0 80px 0 80px",
            }}
            className="swiper-container"
            touchEventsTarget="container"
            spaceBetween={80}
            grabCursor
            slidesPerView="auto">
            {slides?.map((slide) => (
              <SwiperSlide
                key={slide.year}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 320,
                  gap: 15,
                  height: "100%",
                }}>
                <SliderCard year={slide.year} description={slide.description} />
              </SwiperSlide>
            ))}
            <SliderControl slides={slides} />
          </Swiper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
