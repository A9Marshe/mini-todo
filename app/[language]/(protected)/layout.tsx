import Header from "@/components/layout/header";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-blue-400 w-full h-full">
      <Header />
      {children}
    </div>
  );
}
