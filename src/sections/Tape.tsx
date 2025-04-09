import StarIcon from "@/assets/icons/star.svg";
import { InfiniteSlider } from "@/components/InfiniteSlider";

const words = [
  "Perfomant",
  "Accsessibile",
  "Secure",
  "Interactive",
  "Scalable",
  "UserFrindely",
  "Responsive",
  "Maintainable",
  "SearchOptimized",
  "Usable",
  "Reliable",
];
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <InfiniteSlider gap={16} speed={20} reverse={true}>
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
};
