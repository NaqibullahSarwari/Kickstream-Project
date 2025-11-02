"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Video,
  MessageSquare,
  Key,
  Settings,
  Users,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/go-live", label: "Go Live", icon: Video },
    { href: "/dashboard/stream", label: "Stream", icon: Video },
    { href: "/dashboard/keys", label: "Keys", icon: Key },
    { href: "/dashboard/chat", label: "Chat Setting", icon: MessageSquare },
    { href: "/dashboard/community", label: "Community", icon: Users },
  ];

  return (
    <div className="flex h-screen bg-gray-500 text-white">
      <aside className="w-64 bg-[#0E0E10] border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Streaming Platform</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-[#26262C] hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
