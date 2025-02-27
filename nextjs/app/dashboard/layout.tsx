import { Navigation } from "../components/Navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}
