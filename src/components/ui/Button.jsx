import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-[#DC143C] text-white hover:bg-[#A30F2D] border border-[#DC143C]",
  secondary:
    "bg-white text-[#111111] hover:bg-[#F7F7F8] border border-[#D1D5DB]",
  ghost: "bg-transparent text-[#DC143C] hover:text-[#A30F2D] border border-transparent",
};

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  ...props
}) => {
  const classes = `inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC143C]/30 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
        {showArrow && <ArrowRight size={16} />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </button>
  );
};

export default Button;
