import { Separator } from "@radix-ui/react-separator";

export default function Footer() {
  return (
    <header className="flex w-full items-center h-12 justify-between gap-2 border-b px-4">
      footer
      <Separator orientation="vertical" className="mr-2 h-4" />
    </header>
  );
}
