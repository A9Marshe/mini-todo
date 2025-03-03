import TaskModal from "@/components/tasks/TaskModal";

export default async function InterceptedTask(
  params: Promise<{ taskID: string }>
) {
  const taskID = (await params).taskID;
  console.log("in intercepted");
  console.log("awaited params, ", await params);
  return <TaskModal>{`taskID: ${taskID}`}</TaskModal>;
}
