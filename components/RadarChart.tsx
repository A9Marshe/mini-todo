"use client";

import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartData } from "@/mock/mainPageData";

export function ProgressBriefRadarChart() {
  const chartConfig = {
    hours: {
      label: "Hours",
    },
    p1: {
      label: "p1",
      color: "hsl(var(--chart-1))",
    },
    p2: {
      label: "p2",
      color: "hsl(var(--chart-2))",
    },
    p3: {
      label: "p3",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  const sortedData = chartData.toSorted(({ hours: a }, { hours: b }) => a - b);
  return (
    <ChartContainer config={chartConfig} className="mx-auto ">
      <RadialBarChart data={chartData} innerRadius={30} outerRadius={"80%"}>
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent hideLabel nameKey="project" />}
        />
        <PolarGrid gridType="circle" />
        <RadialBar dataKey="hours" />
      </RadialBarChart>
    </ChartContainer>
  );
}
