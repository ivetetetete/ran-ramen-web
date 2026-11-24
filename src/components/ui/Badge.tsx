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
    default: "bg-papel-washi text-tinta-sumi border-tinta-sumi",
    amber: "bg-amarillo-caldo text-tinta-sumi border-tinta-sumi font-bold",
    rose: "bg-rojo-ran text-blanco-arroz border-tinta-sumi font-bold",
    red: "bg-rojo-ran text-blanco-arroz border-tinta-sumi font-bold",
    outline: "bg-blanco-arroz border-tinta-sumi text-tinta-sumi",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border-2 px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#1C1917]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
