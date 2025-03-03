import type { taskStatus } from "@/types/common";
import { cva } from "class-variance-authority";
import { Badge } from "../ui/badge";

export default function TaskStatusBadge({ status }: { status: taskStatus }) {
  const taskVariant = cva("select-none text-background ", {
    variants: {
      status: {
        backlog: "bg-blue-500  rounded.md ",
        ongoing: "bg-purple-500",
        in_progress: "bg-blue-500",
        completed: "bg-green-500",
      },
    },
  });
  return <Badge className={taskVariant({ status })}>{status}</Badge>;
}
