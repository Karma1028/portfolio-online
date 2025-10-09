"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { 
  User, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Image, 
  Mail,
  Newspaper 
} from "lucide-react";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Journey",
      link: "/education",
      icon: <GraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <Code className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FolderOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <Image className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
