"use client";

import Container from "@/app/pages/shared/components/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <Container className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://merakiui.com/images/full-logo.svg"
            alt="Logo"
            width={100}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-200 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          } md:opacity-100 md:translate-y-0 md:pointer-events-auto flex flex-col md:flex-row gap-4 md:gap-6 p-6 md:p-0`}
        >
          {["Home", "Shop", "Contact", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
