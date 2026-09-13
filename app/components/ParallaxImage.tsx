"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { registerParallax } from "./parallax-manager";

type ParallaxImageProps = Omit<
  React.ComponentProps<typeof Image>,
  "fill" | "style"
> & {
  speed?: number;
  wrapperClassName?: string;
};

export default function ParallaxImage({
  speed = 0.08,
  wrapperClassName = "relative h-full w-full overflow-hidden",
  className,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    return registerParallax(el, speed);
  }, [speed]);

  return (
    <div className={wrapperClassName}>
      <div ref={innerRef} className="absolute inset-[-8%] will-change-transform">
        <Image
          fill
          alt={alt}
          className={`object-cover ${className ?? ""}`}
          {...imageProps}
        />
      </div>
    </div>
  );
}
