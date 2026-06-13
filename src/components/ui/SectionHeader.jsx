const SectionHeader = ({ eyebrow, title, description, align = "left" }) => {
  return (
    <div className={`mb-8 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#DC143C]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[28px] font-bold leading-tight text-[#111111] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[#4B5563] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
