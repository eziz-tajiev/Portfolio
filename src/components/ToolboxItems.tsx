import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";
import { InfiniteSlider } from "./InfiniteSlider";

export const ToolboxItems = ({
  items,
  className,
  reverse,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  reverse: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <InfiniteSlider
        speed={80}
        reverse={reverse}
        className="flex flex-none py-0.5"
        gap={16}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center py-2 px-3 gap-4 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};
