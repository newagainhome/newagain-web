import Badge from "@/components/ui/Badge";

type SectionTitleProps = {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignment = {
    center: "mx-auto text-center",
    left: "text-left",
  };

  return (
    <div className={`max-w-3xl ${alignment[align]}`}>
      <Badge>{badge}</Badge>

      <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-xl leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}