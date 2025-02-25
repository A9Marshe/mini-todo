export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectID: string }>;
}) {
  const id = (await params).projectID;
  return <div className=" bg-blue-400 w-full h-full">projectID: {id}</div>;
}
