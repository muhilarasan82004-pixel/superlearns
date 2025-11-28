"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Store", href: "/" },
    { name: "Mac", href: "#mac" },
    { name: "iPad", href: "#ipad" },
    { name: "iPhone", href: "#iphone" },
    { name: "Watch", href: "#watch" },
    { name: "AirPods", href: "#airpods" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                    scrolled
                        ? "bg-[rgba(255,255,255,0.72)] dark:bg-[rgba(29,29,31,0.72)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-black/[0.08] dark:border-white/[0.08] shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
                        : "bg-transparent"
                )}
            >
                <nav className="mx-auto max-w-[980px] px-6">
                    <div className="flex h-13 items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center -ml-4 px-4 py-2 hover:opacity-70 transition-opacity"
                            aria-label="SuperLearn Home"
                        >
                            <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                className="text-[#1d1d1f] dark:text-[#f5f5f7]"
                            >
                                <path d="M8.5 0C5.5 0 3 2.5 3 5.5c0 2 1 3.5 2.5 4.5C4 11 3 13 3 15.5c0 2.5 2 4.5 4.5 4.5h1c2.5 0 4.5-2 4.5-4.5 0-2.5-1-4.5-2.5-5.5 1.5-1 2.5-2.5 2.5-4.5C13 2.5 10.5 0 8.5 0z" />
                            </svg>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center flex-1 justify-center">
                            <div className="flex items-center gap-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-xs font-normal text-[#1d1d1f] dark:text-[#f5f5f7] hover:opacity-70 transition-opacity whitespace-nowrap"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">
                            {/* Theme Toggle */}
                            {mounted && (
                                <button
                                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors -mr-2"
                                    aria-label="Toggle theme"
                                >
                                    <Sun className="w-[18px] h-[18px] text-[#1d1d1f] dark:text-[#f5f5f7] absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="w-[18px] h-[18px] text-[#1d1d1f] dark:text-[#f5f5f7] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                </button>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors -mr-2"
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                                ) : (
                                    <Menu className="w-5 h-5 text-[#1d1d1f] dark:text-[#f5f5f7]" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-black/50 dark:bg-black/70 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="fixed top-11 left-0 right-0 z-50 mx-auto max-w-[980px] px-6 md:hidden"
                        >
                            <div className="mt-2 rounded-2xl bg-[rgba(255,255,255,0.72)] dark:bg-[rgba(29,29,31,0.72)] backdrop-blur-[20px] backdrop-saturate-[180%] border border-black/[0.08] dark:border-white/[0.08] shadow-2xl overflow-hidden">
                                <div className="py-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-6 py-3 text-sm font-normal text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
