"use client";

import Link from "next/link";
import { NavItem } from "./NavItem";
import { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Skills", href: "/skills" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contacts", href: "/contacts" },
];

export const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);

  return (
      <header>
        <nav className="fixed top-0 left-0 w-full h-[56px] p-5 bg-gray-700 drop-shadow-lg text-white text-xl px-20 flex justify-between items-center z-50">
          <div>
            <Link href={"/"}>
              <h1 className="logo">Yaks Blog</h1>
            </Link>
          </div>
          <div
              onClick={() => setNavActive(!navActive)}
              className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="h-[56px] flex justify-end items-center bg-gray-600 drop-shadow-lg">
            {MENU_LIST.map((menu) => (
                <div
                    onClick={() => {
                      setNavActive(false);
                    }}
                    key={menu.text}
                    className="h-[56px]"
                >
                  <NavItem {...menu} />
                </div>
            ))}
          </div>
        </nav>
      </header>
  );
};

export default Navbar;