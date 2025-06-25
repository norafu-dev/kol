"use client";

import React from "react";
import { Button } from "../ui/button";
import { Home, Plus, Hash } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// 将频道数据移到单独的文件中管理
const dummyChannels = [
  { id: 1, name: "Woods" },
  { id: 2, name: "Eliz" },
  { id: 3, name: "Mia" },
  { id: 4, name: "舒琴" },
  { id: 6, name: "always win" },
];

// 单个频道项组件
const ChannelItem = ({ channel, isActive }) => (
  <Link
    href={`/channel/${channel.id}`}
    className={cn(
      "flex items-center gap-2 px-2 py-2 rounded-md transition-colors",
      "hover:bg-gray-100 dark:hover:bg-gray-800",
      isActive && "bg-gray-100 dark:bg-gray-800"
    )}
  >
    <Hash className="w-4 h-4 text-gray-500" />
    <span className="truncate">{channel.name}</span>
  </Link>
);

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-60 h-full border-r border-gray-200 dark:border-gray-800 flex flex-col p-4 bg-white dark:bg-gray-900">
      {/* 添加频道按钮 */}
      <Link href="/channel/new" className="mb-4">
        <Button className="w-full gap-2">
          <Plus className="w-4 h-4" />
          添加频道
        </Button>
      </Link>

      {/* 频道概况链接 */}
      <Link
        className={cn(
          "flex items-center gap-2 px-2 py-2 rounded-md transition-colors mb-4",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          pathname === "/channel" && "bg-gray-100 dark:bg-gray-800"
        )}
        href="/channel"
      >
        <Home className="w-4 h-4 text-gray-500" />
        <span>频道概览</span>
      </Link>

      {/* 频道列表 */}
      <div className="space-y-1">
        <div className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase">
          频道列表
        </div>
        {dummyChannels.map((channel) => (
          <ChannelItem
            key={channel.id}
            channel={channel}
            isActive={pathname === `/channel/${channel.id}`}
          />
        ))}
      </div>

      {/* 如果列表很长，添加滚动 */}
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
        <div className="text-xs text-gray-500 text-center">
          共 {dummyChannels.length} 个频道
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
