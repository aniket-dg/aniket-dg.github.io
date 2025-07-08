
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Backend", href: "#backend" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Aniket<span className="text-primary">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors"
              >
                <span className="text-primary"></span> {item.name}
              </a>
            ))}
            <div className="ml-4 pr-2">
              <ModeToggle />
            </div>
            <Button asChild className="ml-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium hover:text-primary transition-colors"
            >
              <span className="text-primary"></span> {item.name}
            </a>
          ))}
          <Button asChild className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
