import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-tinta-sumi bg-blanco-arroz p-6 shadow-manga",
        hoverEffect && "card-refined",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
