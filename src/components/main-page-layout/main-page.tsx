"use client";

import { FloatingDock } from "../ui/floating-dock";

import {
  Briefcase,
  FileCode,
  Home,
  Info,
  LaptopMinimalCheck,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "../ui/button";
import { useSiteContext } from "@/contexts/site-context";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useSiteContext();

  const items = [
    {
      title: "Home",
      href: "",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "About Me",
      href: "/#about",
      icon: (
        <Info className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Skills",
      href: "/#skills",
      icon: (
        <LaptopMinimalCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Experience",
      href: "/#experience",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Portfolio",
      href: "/#portfolio",
      icon: (
        <FileCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];

  return (
    <div className={theme}>
      <div className="relative bg-background text-foreground max-h-screen max-w-screen overflow-auto">
        <FloatingDock
          items={items}
          desktopClassName="absolute bottom-0 m-auto left-1/2 -translate-x-1/2 z-40"
          mobileClassName="absolute bottom-0 right-0 p-4 pb-16 z-40"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-0 left-0 rounded-full m-4 mb-16 z-40"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
        <div className="h-screen w-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory">
          {children}
        </div>
      </div>
    </div>
  );
}
