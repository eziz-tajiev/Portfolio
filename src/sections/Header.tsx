"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

let tabs = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export const Header = () => {
  const [hash, setHash] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") setHash(`/${window.location.hash}`);
  }, []);

  const router = useRouter();

  return (
    <header className="flex justify-center items-center fixed top-3 left-1/2 -translate-x-1/2 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {tabs.map((tab) => (
          <button
            key={tab.href}
            onClick={() => {
              setHash(tab.href);
              router.replace(tab.href);
            }}
            className={`${
              hash === tab.href ? "" : "hover:text-white/70"
            } relative nav-item`}
          >
            <motion.div
              layoutId={"active-pill"}
              className={`absolute inset-0 ${
                tab.href == hash ? "bg-white" : ""
              }`}
              style={{
                borderRadius: "9999px",
              }}
              transition={{
                type: "spring",
                duration: 0.6,
              }}
            />
            {/* )} */}
            <span className="relative z-10 mix-blend-exclusion">
              {tab.label}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
};
