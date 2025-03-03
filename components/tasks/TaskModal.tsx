import Modal from "../core/modal";

export default function TaskModal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Modal title="task brief">{children}</Modal>;
}
