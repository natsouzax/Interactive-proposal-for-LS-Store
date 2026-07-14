"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/constants/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-gray-200/50 bg-white/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container size="wide">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <a href="#" className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight text-gray-900 lg:text-2xl">
                LS Store
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex">
              <Button as="a" href="#investimento" variant="outline">
                Ver Investimento
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="min-h-11 min-w-11 rounded-full p-2 text-gray-900 transition-colors hover:bg-gray-100 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-white px-4 pt-24 sm:px-6 lg:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-playfair)] text-2xl text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#investimento"
              size="lg"
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full"
            >
              Ver Investimento
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
