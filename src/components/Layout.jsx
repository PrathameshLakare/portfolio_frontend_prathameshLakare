import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex">
        <div className="hidden md:block fixed top-0 left-0 h-screen z-40">
          <AppSidebar />
        </div>

        <main className="flex-1 md:ml-[12rem] relative">
          <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 bg-gray-50/90 dark:bg-gray-900/90 shadow md:hidden">
            <span className="text-lg font-bold text-black-700 dark:text-black-300">
              Prathamesh Lakare
            </span>
            <SidebarTrigger />
          </div>
          <div className="pt-14 px-5 md:p-8 md:ms-14">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
