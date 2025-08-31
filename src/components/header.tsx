import { Code2 } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
];

export function Header() {
  return (
    <header className="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold">Garv's Gear</span>
          </a>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
