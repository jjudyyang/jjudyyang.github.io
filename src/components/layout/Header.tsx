
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/case-studies" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/about" className="flex items-center gap-2">
          <span className="text-xl font-bold">Judy Yang</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                pathname === item.path
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
            <a href="/JudyYang_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 flex flex-col bg-background p-6 md:hidden">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium transition-colors hover:text-foreground/80 ${
                    pathname === item.path
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="default" className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
                <a href="/JudyYang_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
