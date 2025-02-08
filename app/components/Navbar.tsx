"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const router = usePathname();

  const isActiveRoute = (href: string) => {
    return router === href ? "text-orange-500 bg-white text-xl underline" : "";
  };

  return (
    <nav className="p-5 bg-orange-500 text-white text-xl px-20">
      <ul className="flex">
        <li>
          <Link
            href="/"
            className={`mr-5 hover:text-orange-100 ${isActiveRoute("/")}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`mr-5 hover:text-gray-700 ${isActiveRoute("/about")}`}
          >
            Page
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`mr-5 hover:text-gray-700 ${isActiveRoute("/skills")}`}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={`mr-5 hover:text-gray-700 ${isActiveRoute(
              "/experience"
            )}`}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`mr-5 hover:text-gray-700 ${isActiveRoute(
              "/portfolio"
            )}`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className={`mr-5 hover:text-gray-700 ${isActiveRoute("/contacts")}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
