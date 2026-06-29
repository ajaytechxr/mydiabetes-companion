import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import TopNavbar from "./TopNavbar";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <TopNavbar />

        <main className="p-6 bg-slate-100 min-h-screen">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}