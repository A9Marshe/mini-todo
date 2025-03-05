import ProjectModal from "@/components/projects/ProjectModal";

export default async function InterceptedProject({
  params,
}: {
  params: Promise<{ projectID: string }>;
}) {
  console.log("in intercepted tasks page");
  const ProjectID = (await params).projectID;
  return <ProjectModal>{`ProjectID: ${ProjectID}`}</ProjectModal>;
}
