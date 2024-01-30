/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/navbar";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  Files,
  LogOut
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-5  pb-10 pt-24 bg-slate-300 ">
      {!mobileWidth && (
        <div className="absolute right-[-30px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Citizens",
            href: "/citizens",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Applications",
            href: "/applications",
            icon: Files,
            variant: "ghost"
          },
          {
            title: "LogOut",
            href: "/logout",
            icon: LogOut,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}