"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export function Reveal({
  children,
  className,
}: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
