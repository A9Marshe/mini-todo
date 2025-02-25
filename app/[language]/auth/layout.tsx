import Footer from "@/components/layout/footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full h-full">
      {children}
      <Footer />
    </div>
  );
}
