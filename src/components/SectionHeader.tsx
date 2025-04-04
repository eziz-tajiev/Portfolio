export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6">{title}</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-xs mx-auto">
        {description}
      </p>
    </>
  );
};
