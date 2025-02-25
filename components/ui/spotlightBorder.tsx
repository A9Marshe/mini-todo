import { Spotlight } from "../core/spotlight";

export function SpotlightBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative  w-full md:[400px] overflow-hidden rounded-xl bg-card p-[1px] ">
      <Spotlight
        className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400"
        size={200}
      />
      <div className="relative h-full w-full rounded-xl bg-white dark:bg-black">
        {children}
      </div>
    </div>
  );
}
