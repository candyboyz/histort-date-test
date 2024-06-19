import React, { useState } from "react";
import { Header } from "@/widgets/header";
import { MainWrapper, ContentWrapper } from "@/shared/ui/wrappers";
import { Layout } from "@/shared/ui/layout";
import { RangeDate } from "@/entities/range-date";
import { Navigation } from "@/widgets/navigation";
import { Slider } from "@/widgets/slider";
import { events } from "@/shared/lib/data";
import { AnimatePresence, motion } from "framer-motion";

const getRangeDate = (slides: { year: number; description: string }[]) => {
  const years = slides.map((slide) => slide.year);

  return { min: Math.min(...years), max: Math.max(...years) };
};

export const App = () => {
  const [page, setPage] = useState(0);

  const [hoverId, setHoverId] = useState<number>();

  return (
    <MainWrapper>
      <Layout />
      <div
        className="mobile-nav-wrapper"
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          width: "100%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}>
        {events?.map((_, index) => {
          return (
            <button
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: "100%",
                background: "#42567A",
                opacity: page === index ? 1 : 0.4,
                border: "none",
              }}
              onClick={() => setPage(index)}
            />
          );
        })}
      </div>
      <div
        className="circle-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 586,
          height: 586,
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {events.map((_, index) => {
          const deg = (360 * (index - page)) / events.length + 120;
          // console.log(deg);

          const animate = {
            initial: {
              width: 56,
              height: 56,
              background: "#F4F5F9",
              border: "1px solid #303E5880",
            },
            animate: {
              width: 56,
              height: 56,
              background: "#F4F5F9",
              border: "1px solid #303E5880",
            },
            exit: {
              width: 6,
              height: 6,
              background: "#42567A",
              border: "none",
            },
          };

          return (
            <AnimatePresence key={index} initial={false}>
              <motion.div
                animate={{ rotate: deg }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "absolute",
                  transform: `rotate(${deg}deg)`,
                  transformOrigin: 293,
                  left: 0,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <motion.div
                  initial={index === page ? "initial" : ""}
                  animate={index === page ? "animate" : ""}
                  whileHover="animate"
                  onPointerEnter={() => setHoverId(index)}
                  onPointerLeave={() => setHoverId(undefined)}
                  transition={{ duration: 0, delay: 0 }}
                  style={{
                    rotate: -deg,
                    width: "56px",
                    height: "56px",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <motion.button
                    onClick={() => {
                      setPage(index);
                    }}
                    variants={animate}
                    transition={{ delay: 0, duration: 0.35, ease: "easeInOut" }}
                    style={{
                      border: "none",
                      position: "relative",
                      width: 6,
                      height: 6,
                      borderRadius: "100%",
                      background: "#42567A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    {(hoverId === index || page === index) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          delay: 0,
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        style={{
                          color: "#42567A",
                          fontWeight: 400,
                          fontSize: 20,
                        }}>
                        {index + 1}
                        {!!events[page]?.title && index === page && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              delay: 1,
                              duration: 0.35,
                              ease: "easeInOut",
                            }}
                            style={{
                              position: "absolute",
                              top: "25%",
                              left: 75,
                              fontWeight: 700,
                              fontSize: 20,
                            }}>
                            {events[page].title}
                          </motion.p>
                        )}
                      </motion.div>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
      <ContentWrapper>
        <Header />
        <RangeDate {...getRangeDate(events[page]?.data)} />
        <div>
          <div
            className="event-title-wrapper-mobile"
            style={{
              margin: "20px",
              borderBottom: "1px solid #C7CDD9",
              height: 50,
              alignItems: "center",
            }}>
            <AnimatePresence initial={false}>
              <motion.p
                key={page}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.35, delay: 0.6 },
                }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0,
                  duration: 0,
                  ease: "easeInOut",
                }}
                style={{
                  color: "#42567A",
                  fontWeight: 700,
                  fontSize: 16,
                }}>
                {events[page].title}
              </motion.p>
            </AnimatePresence>
          </div>
          <div
            className="slider-container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 30,
            }}>
            <Navigation setPage={setPage} page={page} maxPage={events.length} />
            <div
              className="slider-wrapper"
              style={{
                position: "relative",
                maxHeight: 160,
                height: "100%",
              }}>
              <Slider slides={events[page]?.data} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </MainWrapper>
  );
};
