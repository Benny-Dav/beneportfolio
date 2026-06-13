const Badge = ({ children, accent = false, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${
        accent
          ? "border-[#F7C9D2] bg-[#FDECEF] text-[#A30F2D]"
          : "border-[#E5E7EB] bg-[#F7F7F8] text-[#374151]"
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
