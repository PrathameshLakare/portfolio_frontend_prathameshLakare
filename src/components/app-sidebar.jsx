import {
  Calendar,
  Home,
  Inbox,
  Search,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Inbox,
  },
  {
    title: "About",
    url: "/about",
    icon: Calendar,
  },
  {
    title: "Blog",
    url: "/blogs",
    icon: Search,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className={"w-70 relative"}>
      <SidebarContent className="flex flex-col h-screen pb-28 ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold py-6 text-center tracking-wide">
            Prathamesh Lakare
          </SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col flex-grow">
            <SidebarMenu className="flex-grow space-y-2 px-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition ${
                          isActive && "bg-black-100 dark:bg-black-800"
                        }`
                      }
                    >
                      <item.icon
                        size={28}
                        className="text-black-600 dark:text-black-400"
                      />
                      <span className="text-lg font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <div className="mt-8 px-4">
              <p className="text-sm font-semibold mb-6 text-gray-700 dark:text-gray-300">
                SOCIAL
              </p>
              <div className="flex flex-col gap-6">
                <p>
                  <a
                    href="https://github.com/PrathameshLakare"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-2 hover:text-blue-700 transition"
                  >
                    <Github size={24} />
                    GitHub
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/prathamesh-lakare-8a3388206"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center gap-2 hover:text-blue-700 transition"
                  >
                    <Linkedin size={24} />
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://x.com/Prathamesh24929"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex items-center gap-2 hover:text-blue-500 transition"
                  >
                    <Twitter size={24} />
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="absolute bottom-3 ">
        <ModeToggle />
      </div>
    </Sidebar>
  );
}
