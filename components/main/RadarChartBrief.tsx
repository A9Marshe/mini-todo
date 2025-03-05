import { TrendingUp } from "lucide-react";
import CardContainer from "../core/cardContainer";
import { ProgressBriefRadarChart } from "../RadarChart";

export default async function RadarChartBrief() {
  return (
    <CardContainer
      header="Progress Brief"
      footer={
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      }
    >
      <ProgressBriefRadarChart />
    </CardContainer>
  );
}
