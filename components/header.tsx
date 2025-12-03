"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "./theme/theme-switch";
import { motion } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50 ">
      <motion.div
        initial={{
          backgroundColor: "var(--background)",
          opacity: 0.2,
          transform: "translateY(-50px)",
        }}
        whileInView={{
          backgroundColor: "var(--background)",
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center py-4">
          <Link
            href="#home"
            className="text-2xl font-bold text-primary hover:scale-105 transition-scale duration-300"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <ThemeSwitch />
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-muted-foreground hover:text-primary transition-colors hover:scale-105 transition-scale duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <ThemeSwitch />
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </motion.div>
    </header>
  );
}
