 "use client";

import React from "react";

import { cn } from "../lib/cn";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, alt = "Temp-Tech Roofing & Building Services", variant = "default" }: LogoProps) {
  const [src, setSrc] = React.useState("/project1-layout-1.png");

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-12 w-auto",
        variant === "inverse" ? "brightness-0 invert" : undefined,
        className
      )}
      loading="eager"
      decoding="async"
      onError={() => setSrc("/project1-layout-1.png")}
    />
  );
}


