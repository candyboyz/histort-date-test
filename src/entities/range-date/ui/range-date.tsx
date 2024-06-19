import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { DateTextStyles, RangeDateContainerStyles } from "./range-date.styles";

export type RangeDateProps = {
  min: number;
  max: number;
};

export const RangeDate = ({ min, max }: RangeDateProps) => {
  const minRef = useRef<HTMLParagraphElement>();
  const maxRef = useRef<HTMLParagraphElement>();

  const apiMin = useCountUp({
    end: min,
    ref: minRef,
    separator: "",
    duration: 2,
  });

  const apiMax = useCountUp({
    end: max,
    ref: maxRef,
    separator: "",
    duration: 2,
  });

  useEffect(() => {
    apiMin.update(min);
    apiMax.update(max);
  }, [min, max]);

  return (
    <RangeDateContainerStyles>
      <DateTextStyles ref={minRef} variant="min">
        {min}
      </DateTextStyles>
      <DateTextStyles ref={maxRef} variant="max">
        {max}
      </DateTextStyles>
    </RangeDateContainerStyles>
  );
};
