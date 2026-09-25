import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300",
        hoverEffect && "hover:border-red-500/40 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
