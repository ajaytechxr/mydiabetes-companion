"use client";

import {
  Home,
  BookOpen,
  Utensils,
  Activity,
  Droplets,
  BarChart3,
  Settings,
  Bot,
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

const items = [
  {
    title: "Dashboard",
    icon: Home,
  },
  {
    title: "Blood Glucose",
    icon: Activity,
  },
  {
    title: "Meal Planner",
    icon: Utensils,
  },
  {
    title: "Knowledge Center",
    icon: BookOpen,
  },
  {
    title: "Hydration",
    icon: Droplets,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
  {
    title: "AI Companion",
    icon: Bot,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>

        <SidebarGroup>

          <SidebarGroupLabel>
            🩺 MyDiabetes Companion
          </SidebarGroupLabel>

          <SidebarGroupContent>

            <SidebarMenu>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>

                  <SidebarMenuButton>

                    <item.icon className="h-4 w-4" />

                    <span>{item.title}</span>

                  </SidebarMenuButton>

                </SidebarMenuItem>
              ))}

            </SidebarMenu>

          </SidebarGroupContent>

        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}