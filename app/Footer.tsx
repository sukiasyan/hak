import Link from "next/link";

export const Navbar = () => {
  return (
      <nav className="p-5 bg-orange-500 text-white text-xl px-20">
        <ul className="flex">
        <li><Link href='/' className="mr-5 hover:text-yellow-100 ">Home</Link></li>
        <li><Link href='/about' className="mr-5 hover:text-yellow-100 ">Page</Link></li>
        <li><Link href='/about' className="mr-5 hover:text-yellow-100 ">Skills</Link></li>
        <li><Link href='/about' className="mr-5 hover:text-yellow-100 ">Experience</Link></li>
        <li><Link href='/about' className="mr-5 hover:text-yellow-100 ">Portfolio</Link></li>
        <li><Link href='/about' className="mr-5 hover:text-yellow-100 ">Contact</Link></li>
        </ul>
      </nav>
  );
};
