import type { task, taskStatus } from "@/types/common";
import { cva } from "class-variance-authority";
import { ExternalLink, Filter } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
function StatusBadge({ status }: { status: taskStatus }) {
  const taskVariant = cva("select-none ", {
    variants: {
      status: {
        backlog: "bg-transparent ring-2 rounded.md ring-blue-500 ",
        ongoing: "bg-purple-500",
        in_progress: "bg-blue-500",
        completed: "bg-green-500",
      },
    },
  });
  return <Badge className={taskVariant({ status })}>{status}</Badge>;
}
function Task({
  dateCreated,
  name,
  status,
  workIntervals,
  dueDate,
  project,
}: task) {
  // TODO calculate total time from intervals (perhaps using a reducer)
  // TODO localize time
  const totalTimeWorked = "1.5h";
  return (
    <div className="flex items-center flex-row justify-around gap-x-2 min-w-full flex-nowrap">
      <p className="font-medium">{name}</p>
      <div>{project}</div>
      <StatusBadge status={status} />
      <div>{totalTimeWorked}</div>
      <div>{dateCreated}</div>
      {dueDate && <div>{dueDate}</div>}

      <div>
        <Link href={"#"}>
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
}
export default async function RecentTasks() {
  return (
    <Card className=" w-full h-full flex flex-col  justify-between">
      <CardHeader className="p-2 px-4 flex items-center flex-row gap-4 ">
        <CardTitle className="text-xl">Recent tasks</CardTitle>
        <CardDescription>view your recent tasks</CardDescription>
        <div className=" me-0 ms-auto ">
          <Button>
            <Filter />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="  flex-1">
        <ul className="py-2">
          <li>
            <Task
              dateCreated="10/10/20215"
              id="1"
              project="test"
              dueDate="16/10/2025"
              name="task 1"
              status="in_progress"
              workIntervals={[
                { beginTime: "10:00", endTime: "12:00", date: "10/10/2015" },
              ]}
            />
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex gap-y-2 items-start  p-2 flex-col">
        <Separator />
        <small className="text-sm px-2 font-medium leading-none">
          14 tasks completed last week
        </small>
      </CardFooter>
    </Card>
  );
}
