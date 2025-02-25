export default async function TasksPage({
  params,
}: {
  params: Promise<{ taskID: string }>;
}) {
  const id = (await params).taskID;
  return <div className=" bg-blue-400 w-full h-full">taskID: {id}</div>;
}
