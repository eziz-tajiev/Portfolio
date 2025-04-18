"use client";
import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loadingText: string | undefined;
}

export const Button = ({
  loadingText,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={clsx(
        "text-base font-bold py-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl text-gray-950",
        className
      )}
    >
      {!!loadingText ? (
        <motion.span
          className="font-bold"
          initial={{ backgroundPosition: "90% center" }}
          animate={{ backgroundPosition: "0% center" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--secondary) 45%, var(--primary) 50%, var(--primary) 50%, var(--secondary) 54%)",
            backgroundSize: "250% 100%",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {loadingText}
        </motion.span>
      ) : (
        children
      )}
    </button>
  );
};
