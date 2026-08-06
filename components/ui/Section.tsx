import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "dark" | "gradient";
};

export default function Section({
  children,
  id,
  className = "",
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-slate-50",
    dark: "bg-slate-950 text-white",
    gradient: "bg-gradient-to-br from-white via-green-50 to-white",
  };

  return (
    <section
      id={id}
      className={`
        py-24
        ${backgrounds[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}