"use client";
import Call from "@/assets/icons/call.svg";
import Email from "@/assets/icons/sms.svg";
import WhatsApp from "@/assets/icons/whatsApp.svg";
import GitHub from "@/assets/icons/Github - Negative.svg";
import Telegram from "@/assets/icons/Telegram - Negative.svg";
import { easeInOut, motion } from "framer-motion";
import { reverse } from "dns";
import { useState } from "react";

const contacts = [
  {
    icon: <Call className="md:size-7 lg:size-8" />,
    title: "+993 61 965538",
    href: "#",
  },
  {
    icon: <Email className="md:size-7 lg:size-8" />,
    title: "eziztajiev@gmail.com",
    href: "#",
  },
];
const socialMedia = [
  {
    icon: <WhatsApp className="size-5 md:size-7 lg:size-11" />,
    title: "WhatsApp",
    href: "#",
  },
  {
    icon: <GitHub className="md:size-7 lg:size-11" />,
    title: "GitHub",
    href: "#",
  },
  {
    icon: <Telegram className="md:size-7 lg:size-11 -translate-x-[2px]" />,
    title: "Telegram",
    href: "#",
  },
];

export const ContactSection = () => {
  // const { mutate, data, isPending, error } = useMutation({
  //   mutationFn: () => {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         fullName: "test",
  //         contact: "test",
  //         content: "test",
  //       }),
  //     });

  //     return response
  //   }
  // })

  async function handleSend() {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        fullName: "test",
        contact: "test",
        content: "test",
      }),
    });

    return response;
  }

  return (
    <footer id="contact" className="pt-8 pb-0">
      <div className="relative overflow-x-clip">
        <div className="absolute h-[400px] w-[1600px] bottom-0 bg-emerald-300/30 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="bg-black/15 lg:rounded-[20px]">
          <div className="container">
            <div className="flex flex-col gap-12 lg:flex lg:flex-row lg:justify-between">
              {/* 1 element */}
              <div className="lg:w-[400px]">
                <div className="flex justify-center py-11">
                  <h2
                    className="text-2xl md:text-3xl w-[274px] md:w-[400px] text-center font-semibold uppercase bg-clip-text
                  bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent lg:text-start lg:text-4xl"
                  >
                    Let's create something amazing together
                  </h2>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <div className="flex flex-col items-center text-[18px] leading-[21.78px] gap-3 md:text-2xl lg:text-[28px] lg:items-start lg:justify-start">
                    {contacts.map((contact, contactIndex) => (
                      <a
                        key={contactIndex}
                        href={contact.href}
                        className="inline-flex gap-2 items-center"
                      >
                        <span>{contact.icon}</span>
                        <span>{contact.title}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex justify-around pt-7 md:justify-center md:gap-10 lg:justify-start lg:pt-10">
                  {socialMedia.map((media, mediaIndex) => (
                    <a
                      key={mediaIndex}
                      href={media.href}
                      className="md:inline-flex md:items-center md:gap-2 lg:flex-col lg:justify-center"
                    >
                      <span className="flex justify-center text-center">
                        {media.icon}
                      </span>
                      <span className="text-[14px] leading-[16.94px] md:text-base">
                        {media.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                {/* 2 element */}
                <div className="md:flex md:justify-center lg:pt-12">
                  <div className="flex flex-col gap-4 pb-10 md:w-[400px]">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="contact-input"
                    />
                    <input
                      type="text"
                      placeholder="How to contact you?"
                      className="contact-input"
                    />
                    <textarea
                      placeholder="Description"
                      className="contact-input resize-none h-[150px]"
                    ></textarea>
                    <button
                      onClick={handleSend}
                      // onClick={mutate}
                      className="text-base font-bold py-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl text-gray-950"
                    >
                      Send
                    </button>
                    {/* <button className="py-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-xl">
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
                        Sending...
                      </motion.span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
