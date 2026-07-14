import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses = {
  primary:
    "bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-gray-900",
  outline:
    "border border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus-visible:outline-gray-900",
  ghost: "text-gray-600 hover:text-gray-900",
} as const;

const sizeClasses = {
  md: "min-h-11 px-6 py-2.5 text-sm",
  lg: "min-h-12 px-7 py-3.5 text-sm",
} as const;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const sharedClassName = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (props.as === "a") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...anchorProps } = props;
    return (
      <a className={sharedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...buttonProps } = props;
  return (
    <button className={sharedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
