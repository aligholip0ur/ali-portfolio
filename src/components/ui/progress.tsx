"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface MyProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  progressbg?: string;
}

const Progress = React.forwardRef<HTMLDivElement, MyProgressProps>(
  ({ className, value = 0, progressbg = "bg-primary", ...props }, ref) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        data-slot="progress"
        className={cn(
          "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn("h-full flex-1 transition-all ", progressbg)}
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = "Progress";
export { Progress };
