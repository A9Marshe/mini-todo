import { basicTasksCard } from "@/mock/mainPageData";
import { Filter } from "lucide-react";
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
import BasicTasksTable from "./BasicTasksTable";

export default async function RecentTasks() {
  return (
    <Card className=" w-full min-h-full flex flex-col max-h-[50dvh]  justify-between">
      <CardHeader className="p-2 px-4 flex items-center flex-row gap-4 ">
        <CardTitle className="text-xl">Recent tasks</CardTitle>
        <CardDescription>view your recent tasks</CardDescription>
        <div className=" me-0 ms-auto ">
          <Button>
            <Filter />
          </Button>
        </div>
      </CardHeader>
      <CardContent className=" overflow-y-auto flex-1">
        <BasicTasksTable rows={[...basicTasksCard]} />
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
