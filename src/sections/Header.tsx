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
'use client'
import { useState } from "react";
import {motion} from "framer-motion";

let tabs = [
  {
    id: "home",
    label: "Home",
    href: "#",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#",
  },
  {
    id: "about",
    label: "About",
    href: "#",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#",
  }
]

export const Header = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      <div className="flex justify-center items-center fixed top-3 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {tabs.map(tab=>(
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
               activeTab === tab.id ? "" : "hover:text-white/70"
                } relative nav-item`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="active-pill" 
                    className="absolute bg-white inset-0"
                    style={{
                      borderRadius: '9999px',
                    }}
                    transition={{
                      type:"spring",
                      duration:0.6
                    }}
                  />
                )}
                <span className="z-10 mix-blend-exclusion">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
