import React from "react";
import {
  NavigationButtonContainerStyles,
  NavigationButtonStyles,
  NavigationContainerStyles,
  NavigationCounterStyles,
} from "./navigation.styles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { zeroPad } from "@/shared/lib/utils";

type NavigationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  maxPage: number;
};

export const Navigation = ({ setPage, page, maxPage }: NavigationProps) => {
  return (
    <NavigationContainerStyles>
      <NavigationCounterStyles>{`${zeroPad(page + 1, 2)}/${zeroPad(
        maxPage,
        2,
      )}`}</NavigationCounterStyles>
      <NavigationButtonContainerStyles>
        <NavigationButtonStyles
          onClick={() => {
            setPage((prev) => {
              if (prev === 0) return prev;
              return --prev;
            });
          }}
          disabled={page === 0}>
          <ChevronLeft color="#42567a" />
        </NavigationButtonStyles>
        <NavigationButtonStyles
          onClick={() => {
            setPage((prev) => {
              if (prev === maxPage - 1) return prev;
              return ++prev;
            });
          }}
          disabled={page === maxPage - 1}>
          <ChevronRight color="#42567a" />
        </NavigationButtonStyles>
      </NavigationButtonContainerStyles>
    </NavigationContainerStyles>
  );
};
