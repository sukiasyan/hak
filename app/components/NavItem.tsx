import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
}

export const NavItem = ({ text, href }: NavItemProps) => {
  const currentRoute = usePathname();

  const linkStyle =
    "flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-white duration-300";
  // styles for active and non-active links
  const activeStyle = linkStyle + " text-white bg-customGreen";
  const nonActiveStyle = linkStyle + " text-white";

  return (
    <Link
      href={href}
      className={currentRoute === href ? activeStyle : nonActiveStyle}
    >
      {text}
    </Link>
  );
};
