import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left",
        className
      )}
    >
      <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
      <h2
        className="font-[family-name:var(--font-playfair)] font-bold leading-[1.1] text-gray-900"
        style={{ fontSize: "var(--fs-h1)" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-lg text-gray-400 leading-relaxed",
            align === "center" && "mx-auto"
          )}
          style={{ fontSize: "var(--fs-body-lg)" }}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
