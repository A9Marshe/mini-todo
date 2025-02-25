import Header from "@/components/layout/header";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col px-4  pt-2">
      <Header />
      {children}
    </div>
  );
}
