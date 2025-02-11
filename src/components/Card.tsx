import { PropsWithChildren } from "react";
import grainImage from "@/assets/images/grain.jpg"
import { twMerge } from "tailwind-merge";

export const Card = ({className, children}:PropsWithChildren<{className?:string}>) => {
    return (
        <div className={twMerge("relative bg-gray-800 rounded-3xl overflow-hidden z-10 after:absolute after:inset-0 after:z-10 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none p-6", 
        className)}>
            <div className="absolute inset-0 -z-10 opacity-5" style={{
              backgroundImage: `url(${grainImage.src})`
            }}></div>
            {children}
        </div>

    );
};