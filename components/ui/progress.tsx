"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  animatedValue?: number;
}

function Progress({
  className,
  value,
  animatedValue,
  ...props
}: ProgressProps) {
  const motionValue = useMotionValue(0);
  const transform = useTransform(
    motionValue,
    (v) => `translateX(-${100 - v}%)`
  );

  React.useEffect(() => {
    if (animatedValue !== undefined) {
      const controls = animate(motionValue, animatedValue, {
        duration: 1,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [animatedValue, motionValue]);

  // Si no hay animación, usar el valor directo
  const displayValue = animatedValue !== undefined ? undefined : value;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {animatedValue !== undefined ? (
        <motion.div
          data-slot="progress-indicator"
          className="bg-primary h-full w-full flex-1"
          style={{ transform }}
        />
      ) : (
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-primary h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (displayValue || 0)}%)` }}
        />
      )}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
