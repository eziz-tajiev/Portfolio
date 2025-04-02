// export const Header = () => {
//   return (
//    <div className="flex justify-center items-center fixed top-3 left-1/2 -translate-x-1/2 z-20">
//     <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//       <a href="#" className="nav-item">Home</a>
//       <a href="#" className="nav-item">Projects</a>
//       <a href="#" className="nav-item">About</a>
//       <a href="#" className="nav-item bg-white text-gray-900">Contact</a>
//     </nav>
//   </div>
//  );
// };
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <header className="flex justify-center items-center fixed top-3 left-1/2 -translate-x-1/2 z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${
              "" === tab.href ? "" : "hover:text-white/70"
            } relative nav-item`}
          >
            {/* {activeTab === tab.id && ( */}
            <motion.div
              layoutId="active-pill"
              className="absolute bg-white inset-0"
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
          </Link>
        ))}
      </nav>
    </header>
  );
};
