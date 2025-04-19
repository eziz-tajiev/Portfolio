"use client";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap: number;
  speed: number;
  speedOnHover?: number;
  reverse: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap,
  speed,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = width;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [key, translation, currentSpeed, width, isTransitioning, gap, reverse]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
        onTouchStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onTouchEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};
  return (
    <motion.div
      className={className}
      style={{
        x: translation,
        gap: `${gap}px`,
      }}
      ref={ref}
      {...hoverProps}
    >
      {children}
      {children}
    </motion.div>
  );
}
