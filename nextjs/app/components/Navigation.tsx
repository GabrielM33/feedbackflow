"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ChatBubbleIcon,
  BarChartIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

// Helper function to combine Tailwind classes conditionally
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      name: "Feedback",
      href: "/feedback",
      icon: ChatBubbleIcon,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: BarChartIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: GearIcon,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4">
      <div className="flex flex-col h-full">
        <div className="py-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-blue-600 font-bold text-xl">
              FeedbackFlow AI
            </span>
          </Link>
        </div>

        <div className="flex-1 mt-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md",
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-auto">
          <div className="flex items-center px-3 py-2">
            <PersonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="ml-3 text-gray-700 dark:text-gray-300">
              Small Business Owner
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
