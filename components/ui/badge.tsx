import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-[#eee1d2] px-3 py-1 text-xs font-medium text-[#744532] shadow-border",
        className,
      )}
      {...props}
    />
  );
}
