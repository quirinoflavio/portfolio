"use client";

import { SiGithub, SiLinkedin, SiMedium, SiX, SiDevdotto, SiMinutemailer, SiAboutdotme } from "react-icons/si";
import Link from "next/link";

interface ContactLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const contacts: ContactLink[] = [
  {
    href: "mailto:you@example.com",
    label: "Email",
    icon: <SiMinutemailer className="w-5 h-5" />,
  },
  {
    href: "https://github.com/yourusername",
    label: "GitHub",
    icon: <SiGithub className="w-5 h-5" />,
  },
  {
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
    icon: <SiLinkedin className="w-5 h-5" />,
  },
  {
    href: "https://medium.com/@yourusername",
    label: "Medium",
    icon: <SiMedium className="w-5 h-5" />,
  },
  {
    href: "https://twitter.com/yourusername",
    label: "Twitter",
    icon: <SiX className="w-5 h-5" />,
  },
  {
    href: "https://dev.to/yourusername",
    label: "Dev.to",
    icon: <SiDevdotto className="w-5 h-5" />,
  },
  {
    href: "https://yourwebsite.com",
    label: "Website",
    icon: <SiAboutdotme className="w-5 h-5" />,
  },
];

export default function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {contacts.map(({ href, label, icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          {icon}
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
