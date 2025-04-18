import WhatsApp from "@/assets/icons/whatsApp.svg";
import GitHub from "@/assets/icons/Github - Negative.svg";
import Telegram from "@/assets/icons/Telegram - Negative.svg";
import Link from "next/link";
import Call from "@/assets/icons/call.svg";
import Email from "@/assets/icons/sms.svg";

const socialMedia = [
  {
    icon: <WhatsApp className="size-5 md:size-7 lg:size-11" />,
    title: "WhatsApp",
    href: "https://wa.me/+99361965538",
  },
  {
    icon: <GitHub className="md:size-7 lg:size-11" />,
    title: "GitHub",
    href: "https://github.com/eziz-tajiev",
  },
  {
    icon: <Telegram className="md:size-7 lg:size-11 -translate-x-[2px]" />,
    title: "Telegram",
    href: "https://t.me/vinchenzo27",
  },
];

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

export const Contacts = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-start">
        <div className="flex flex-col items-center text-[18px] leading-[21.78px] gap-3 md:text-2xl lg:text-[28px] lg:items-start lg:justify-start">
          {contacts.map((contact, contactIndex) => (
            <p key={contactIndex} className="inline-flex gap-2 items-center">
              <span>{contact.icon}</span>
              <span>{contact.title}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-around pt-7 md:justify-center md:gap-10 lg:justify-start lg:pt-10">
        {socialMedia.map((media, mediaIndex) => (
          <Link
            key={mediaIndex}
            href={media.href}
            target="_blank"
            className="md:inline-flex md:items-center md:gap-2 lg:flex-col lg:justify-center"
          >
            <span className="flex justify-center text-center">
              {media.icon}
            </span>
            <span className="text-[14px] leading-[16.94px] md:text-base">
              {media.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};
