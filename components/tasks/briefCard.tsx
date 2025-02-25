import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LucideProps } from "lucide-react";
import React from "react";
import { AnimatedNumber } from "../ui/animated-number";
import { Card, CardContent } from "../ui/card";

export default function BriefCard({
  className,
  Icon,
  variant,
}: {
  className?: string;
  variant: "in_process" | "completed" | "on_going" | "backlog";
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  const cardVariants = cva("w-1/2 border-0  md:w-1/5 ", {
    variants: {
      variant: {
        in_process: "bg-blue-500",
        completed: "bg-green-500",
        on_going: "bg-purple-500",
        backlog: "bg-yellow-500",
      },
      defaultVariants: {
        variant: "in_process",
      },
    },
  });
  return (
    <Card className={cn(cardVariants({ variant }), className)}>
      <CardContent className="flex w-full p-4 items-center">
        <Icon size={"2rem"} />
        <div className="flex flex-col px-2 ">
          <h1 className="font-medium  ">{variant}</h1>
          <AnimatedNumber
            className="inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50"
            springOptions={{
              bounce: 0,

              duration: 5000,
            }}
            value={50}
          />
        </div>
      </CardContent>
    </Card>
  );
}
