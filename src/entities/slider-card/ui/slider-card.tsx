import React from "react";

type SliderCardProps = {
  year: number;
  description: string;
};

export const SliderCard = ({ year, description }: SliderCardProps) => {
  return (
    <>
      <span
        style={{
          color: "#3877EE",
          fontFamily: "Bebas Neue",
          fontSize: 25,
          lineHeight: "30px",
        }}>
        {year}
      </span>
      <p
        style={{
          color: "#42567A",
          fontSize: 20,
          fontWeight: 400,
          lineHeight: "30px",
        }}>
        {description}
      </p>
    </>
  );
};
