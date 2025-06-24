"use client";

import React from "react";
import CryptoAILogo from "./CryptoAILogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    <nav className="absolute top-0 left-0 w-full h-14 flex items-center px-4 border-b border-gray-200">
      <div className="flex-shrink-0">
        <CryptoAILogo color="var(--color-logo)" width={150} height={30} />
      </div>
      <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6">
        {LINKS.map((link) => (
          <li
            key={link.label}
            className={cn(
              "px-5 rounded-2xl",
              isActive(link.href) && "text-logo"
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex-shrink-0 ml-auto">Discord</div>
    </nav>
  );
};

export default Navbar;
