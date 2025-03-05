import Modal from "../core/modal";

export default function ProjectModal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Modal title="project brief">{children}</Modal>;
}
