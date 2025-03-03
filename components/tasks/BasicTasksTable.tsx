import { task } from "@/types/common";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import TaskStatusBadge from "./TaskStatusBadge";

export interface BasicTaskRowProps {
  id: string;
  name: string;
  project: { name: string; id: string };
  status: task["status"];
  workTime: string;
  dueDate: string;
}
function BasicTaskRow({
  id,
  name,
  project,
  status,
  workTime,
  dueDate,
}: BasicTaskRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <Link href={`tasks/${id}`}>{name}</Link>
      </TableCell>

      <TableCell>
        <TaskStatusBadge status={status} />
      </TableCell>

      <TableCell className="font-medium">
        <Link href={`projects/${project.id}`}>{project.name}</Link>
      </TableCell>

      <TableCell>{workTime}</TableCell>

      <TableCell>{dueDate}</TableCell>
    </TableRow>
  );
}

interface BasicTableProps {
  rows: BasicTaskRowProps[];
}
export default function BasicTasksTable({ rows }: BasicTableProps) {
  return rows?.length > 0 ? (
    <Table className="rounded-md">
      <TableHeader className="sticky top-0 bg-background/90 backdrop-blur-md ">
        <TableRow>
          <TableHead className="w-[100px]">task</TableHead>
          <TableHead>status</TableHead>
          <TableHead>project</TableHead>
          <TableHead>work hours</TableHead>
          <TableHead>due date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <BasicTaskRow key={row.id} {...row} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <Table>
      <TableCaption>your tasks will show up here</TableCaption>
    </Table>
  );
}
