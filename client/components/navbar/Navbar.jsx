"use client";

import React from "react";
import CryptoAILogo from "./CryptoAILogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Channel",
    href: "/channel",
  },
  {
    label: "Trade",
    href: "/trade",
  },
  {
    label: "Account",
    href: "/account",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <nav className="absolute top-0 left-0 w-full h-14 flex items-center px-4 border-b border-gray-200 bg-background">
      {/* Logo */}
      <div className="flex-shrink-0">
        <CryptoAILogo color="var(--color-logo)" width={150} height={30} />
      </div>

      {/* 桌面版导航 - 在 md 及以上显示 */}
      <ul className="hidden md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:flex md:gap-6">
        {LINKS.map((link) => (
          <li
            key={link.label}
            className={cn(
              "px-5 rounded-2xl transition-colors hover:text-primary",
              isActive(link.href) && "text-logo font-medium"
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* 右侧内容区域 */}
      <div className="flex items-center ml-auto">
        {/* Discord - 只在桌面版显示 */}
        <div className="hidden md:block">Discord</div>

        {/* 手机版 Menubar - 只在 md 以下显示 */}
        <div className="md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-2 px-4 py-2 text-lg font-normal">
                Menu
              </MenubarTrigger>
              <MenubarContent align="end" className="w-48">
                {LINKS.map((link) => (
                  <MenubarItem
                    key={link.label}
                    className={cn(
                      "cursor-pointer",
                      isActive(link.href) && "text-logo font-medium"
                    )}
                    asChild
                  >
                    <Link href={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
