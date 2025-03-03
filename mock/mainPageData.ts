import { BasicTaskRowProps } from "@/components/tasks/BasicTasksTable";

const basicTasksCard: BasicTaskRowProps[] = [
  {
    dueDate: "10/10/2025",
    id: "1",
    name: "task 1",
    project: {
      id: "1",
      name: "project 1",
    },
    status: "backlog",
    workTime: "1200",
  },
  {
    dueDate: "10/10/2025",
    id: "2",
    name: "task 2",
    project: {
      id: "1",
      name: "project 1",
    },
    status: "backlog",
    workTime: "1200",
  },
  {
    dueDate: "10/10/2025",
    id: "3",
    name: "task 3",
    project: {
      id: "2",
      name: "project 2",
    },
    status: "backlog",
    workTime: "1200",
  },
  {
    dueDate: "10/10/2025",
    id: "4",
    name: "task 4",
    project: {
      id: "2",
      name: "project 2",
    },
    status: "backlog",
    workTime: "1200",
  },
];

export { basicTasksCard };
