import TaskModal from "@/components/tasks/TaskModal";

export default async function InterceptedTask({
  params,
}: {
  params: Promise<{ taskID: string }>;
}) {
  console.log("in intercepted tasks page");
  const taskID = (await params).taskID;
  return <TaskModal>{`taskID: ${taskID}`}</TaskModal>;
}
