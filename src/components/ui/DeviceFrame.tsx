import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Device bezels are fluid: width comes entirely from the parent grid/flex
 * cell (never a fixed px), aspect-ratio keeps the device proportions, and
 * `@container` lets the screen content react to its own box instead of the
 * viewport — so the same markup reflows correctly whether the mockup renders
 * at 140px (stacked on a 320px phone) or 640px (desktop hero column).
 */
export function PhoneFrame({ children, className }: FrameProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[240px] @container", className)}>
      <div className="rounded-[2rem] bg-gray-900 p-[3%] shadow-2xl">
        <div className="flex aspect-[9/19.5] flex-col overflow-hidden rounded-[1.6rem] bg-white">
          <div className="flex h-[6%] min-h-4 shrink-0 items-center justify-center bg-gray-100">
            <div className="h-[35%] w-[28%] rounded-full bg-gray-900" />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function TabletFrame({ children, className }: FrameProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[420px] @container", className)}>
      <div className="rounded-2xl bg-gray-900 p-[2%] shadow-2xl">
        <div className="flex aspect-[4/3] flex-col overflow-hidden rounded-xl bg-white">
          <div className="flex h-[5%] min-h-3 shrink-0 items-center justify-center bg-gray-100">
            <div className="h-[30%] w-[10%] rounded-full bg-gray-300" />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function LaptopFrame({ children, className }: FrameProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[720px] @container", className)}>
      <div className="rounded-t-2xl bg-gray-900 p-[1.5%] pb-0">
        <div className="flex aspect-[16/10] flex-col overflow-hidden rounded-t-lg bg-white">
          <div className="flex h-[6%] min-h-6 shrink-0 items-center gap-1.5 bg-gray-100 px-3">
            <div className="h-2 w-2 rounded-full bg-red-300" />
            <div className="h-2 w-2 rounded-full bg-yellow-300" />
            <div className="h-2 w-2 rounded-full bg-green-300" />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[85%] rounded-b-xl bg-gray-800" />
      <div className="mx-auto h-1 w-[60%] rounded-b-lg bg-gray-700" />
    </div>
  );
}
