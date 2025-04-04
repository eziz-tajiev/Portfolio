import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  duration,
  spin,
  isRotate = true,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  duration: number;
  spin?: number;
  isRotate?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="flex items-start justify-start"
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
        initial={{
          rotate: rotation,
        }}
        animate={{
          rotate: 360 + rotation,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        <motion.div
          animate={{
            rotate: isRotate ? 360 : 0,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: spin,
            ease: "linear",
          }}
          className="inline-flex"
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
