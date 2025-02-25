import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <header className="flex w-full items-center h-12 justify-between gap-2 border-b px-4">
      <Separator orientation="vertical" className="mr-2 h-4" decorative />
    </header>
  );
}
