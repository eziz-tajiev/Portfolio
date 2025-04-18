import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { InfiniteSlider } from "@/components/InfiniteSlider";

const quotes = [
  {
    name: "Pedro Pascal",
    position: "Actor",
    text: "The best way to predict your future is to create it.",
    avatar: memojiAvatar1,
  },
  {
    name: "Iris Apfel",
    position: "Fashion Designer",
    text: "When you don't dress like everyone else, you don't have to think like everyone else.",
    avatar: memojiAvatar2,
  },
  {
    name: "Saidmurod Davlatov",
    position: "Businessman",
    text: "By stopping making excuses, you transform your life and gain confidence in yourself.",
    avatar: memojiAvatar3,
  },
  {
    name: "Li Na",
    position: "Tennis Player",
    text: "Never give up, even when everything seems impossible.",
    avatar: memojiAvatar4,
  },
  {
    name: "Christopher Bridges",
    position: "Rapper and Actor",
    text: "The more you hustle, the luckier you get.",
    avatar: memojiAvatar5,
  },
];

export const QuotesSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Motivation"
          title="What Drives Me"
          description="It's not just me. See who inspires my work."
        />
        <div className="flex mt-16 lg:mt-24 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            <InfiniteSlider
              speedOnHover={70}
              speed={100}
              gap={32}
              className="flex flex-none"
              reverse={false}
            >
              {quotes.map((quote) => (
                <Card
                  key={quote.name}
                  className="max-w-xs md:max-w-md p-6 md:p-8"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 flex items-center rounded-full">
                      <Image
                        src={quote.avatar}
                        alt={quote.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{quote.name}</div>
                      <div className="text-sm text-white/40">
                        {quote.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">
                    {quote.text}
                  </p>
                </Card>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </div>
  );
};
