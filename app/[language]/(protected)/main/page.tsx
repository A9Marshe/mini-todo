import BriefCard from "@/components/tasks/briefCard";
import RecentTasks from "@/components/tasks/recentTasks";
import { CircleCheck } from "lucide-react";

export default async function MainPage() {
  const user = "Alex";
  return (
    <div className="w-full h-full flex-col grid md:grid-cols-5 grid-cols-1 gap-2 auto-rows-max ">
      <div className=" col-span-1  md:col-span-5 max-h-fit ">
        <h1> welcome back, {user}</h1>
        <div className="p-2 ring-2 rounded-md flex gap-2 wrap max-w-full">
          <BriefCard variant="backlog" Icon={CircleCheck} />
          <BriefCard variant="in_process" Icon={CircleCheck} />
          <BriefCard variant="on_going" Icon={CircleCheck} />
          <BriefCard variant="completed" Icon={CircleCheck} />
        </div>
      </div>

      <div className=" min-h-[50dvh]  auto-rows-max col-span-1 md:col-span-3 ">
        <RecentTasks />
      </div>
      <div className="bg-green-500 col-span-1 md:col-span-2 "> time chart</div>
    </div>
  );
}
