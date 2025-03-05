import RadarChartBrief from "@/components/main/RadarChartBrief";
import BriefCard from "@/components/tasks/briefCard";
import RecentTasks from "@/components/tasks/recentTasks";
import { CircleCheck } from "lucide-react";

export default async function MainPage() {
  const user = "Alex";
  return (
    <div className="w-full h-full grid-te auto-rows-max grid md:grid-cols-5 grid-cols-1 gap-2 ">
      <div className=" col-span-1  md:col-span-5 row-span-1 max-h-fit ">
        <h1> welcome back, {user}</h1>
        <div className="p-2 ring-2 rounded-md flex gap-2 wrap max-w-full">
          <BriefCard variant="backlog" Icon={CircleCheck} />
          <BriefCard variant="in_process" Icon={CircleCheck} />
          <BriefCard variant="on_going" Icon={CircleCheck} />
          <BriefCard variant="completed" Icon={CircleCheck} />
        </div>
      </div>

      <div className=" row-span-1 flex col-span-1 md:col-span-3">
        <RecentTasks />
      </div>
      <div className=" col-span-1 row-span-1  md:col-span-2">
        <RadarChartBrief />
      </div>
    </div>
  );
}
