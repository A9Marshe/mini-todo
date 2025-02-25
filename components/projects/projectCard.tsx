import type { project } from "@/types/common";
import { Separator } from "../ui/separator";
import { SpotlightBorder } from "../ui/spotlightBorder";

export default function ProjectCard({
  name,
  tasks,
  dateCreated,
  id,
  nextMileStone,
}: project) {
  return (
    <SpotlightBorder>
      <h2>{name}</h2>
      <ul>
        <li>tasks</li>
        <li>tasks</li>
      </ul>

      <Separator />
      <div className="w-full flex flex-nowrap "></div>
    </SpotlightBorder>
  );
}
