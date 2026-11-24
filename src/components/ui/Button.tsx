import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer";

    const variants = {
      primary:
        "bg-rojo-ran text-blanco-arroz hover:bg-tinta-sumi btn-manga",
      secondary:
        "bg-amarillo-caldo text-tinta-sumi hover:bg-naranja-fideo btn-manga",
      outline:
        "bg-blanco-arroz text-tinta-sumi hover:bg-papel-washi btn-manga",
      ghost:
        "text-tinta-sumi hover:bg-papel-washi border-2 border-transparent hover:border-tinta-sumi",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wide",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-13 px-8 text-base tracking-wider",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
