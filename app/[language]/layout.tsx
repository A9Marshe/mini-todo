import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "../globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Nivolite",
  description: "Track your tasks and projects progress locally",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ language: "en" | "ar" }>;
}) {
  const lang = (await params).language;
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";
  //TODO reactivate fonts ${geistSans.variable} ${geistMono.variable}

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`
       antialiased
        ${theme}`}
      suppressHydrationWarning
    >
      <body className=" bg-background text-foreground w-screen h-screen">
        {children}
      </body>
    </html>
  );
}
