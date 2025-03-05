import { basicTasksCard } from "@/mock/mainPageData";
import { Filter } from "lucide-react";
import CardContainer from "../core/cardContainer";
import { Button } from "../ui/button";
import BasicTasksTable from "./BasicTasksTable";

export default async function RecentTasks() {
  return (
    <CardContainer
      header="Recent Tasks"
      description="view your recent tasks"
      controls={
        <>
          <div className=" me-0 ms-auto ">
            <Button>
              <Filter />
            </Button>
          </div>
        </>
      }
    >
      <BasicTasksTable rows={[...basicTasksCard]} />
    </CardContainer>
  );
}
