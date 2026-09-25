import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "amber" | "rose" | "red" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-stone-100 text-stone-700 border-stone-200",
    amber: "bg-amber-100 text-amber-900 border-amber-300 font-semibold",
    rose: "bg-red-50 text-red-700 border-red-200 font-semibold",
    red: "bg-red-50 text-red-700 border-red-200 font-semibold",
    outline: "border-stone-300 text-stone-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
