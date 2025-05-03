"use client";

import Link from "next/link";
import { contacts } from "@/app/data/social-media";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 text-sm text-gray-500">
      <div className="container mx-auto flex flex-col gap-6 px-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
          {contacts.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-black dark:hover:text-white transition"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <div>© {new Date().getFullYear()} Flávio Farias. All rights reserved.</div>
      </div>
    </footer>
  );
}
