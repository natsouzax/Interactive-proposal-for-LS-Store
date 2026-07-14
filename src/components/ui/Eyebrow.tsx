import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest",
        tone === "dark"
          ? "border-white/20 text-white/70"
          : "border-gray-200 text-gray-500",
        className
      )}
    >
      {children}
    </span>
  );
}
