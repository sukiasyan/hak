"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contacts" },
];

export const Navbar = () => {
  const currentRoute = usePathname();

  // styles for all links
  const linkStyle =
    "flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-customGreen duration-300";

  // styles for active and non-active links
  const activeStyle = linkStyle + " text-white bg-customGreen";
  const nonActiveStyle = linkStyle + " text-white";

  return (
    <>
      <header>
        <nav className="p-5 bg-orange-500 text-white text-xl px-20 flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <h1 className="logo">Yaks Blog</h1>
            </Link>
          </div>
          <div className="flex">
            <div className={`nav__menu-bar`}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {MENU_LIST.map((menu, idx) => (
                <div onClick={() => {}} key={menu.text}>
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
      {/*<nav className="h-[56px] flex justify-end  items-center bg-gray-600 drop-shadow-lg">*/}
      {/*  <Link*/}
      {/*    href="/"*/}
      {/*    className={currentRoute === "/" ? activeStyle : nonActiveStyle}*/}
      {/*  >*/}
      {/*    Home*/}
      {/*  </Link>*/}

      {/*  <Link*/}
      {/*    href="/about"*/}
      {/*    className={currentRoute === "/about" ? activeStyle : nonActiveStyle}*/}
      {/*  >*/}
      {/*    About*/}
      {/*  </Link>*/}

      {/*  <Link*/}
      {/*    href="/skills"*/}
      {/*    className={currentRoute === "/skills" ? activeStyle : nonActiveStyle}*/}
      {/*  >*/}
      {/*    Skills*/}
      {/*  </Link>*/}

      {/*  <Link*/}
      {/*    href="/contacts"*/}
      {/*    className={*/}
      {/*      currentRoute === "/contacts" ? activeStyle : nonActiveStyle*/}
      {/*    }*/}
      {/*  >*/}
      {/*    Contact*/}
      {/*  </Link>*/}
      {/*</nav>*/}
    </>
  );
};

export default Navbar;
