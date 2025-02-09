import Link from "next/link";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="flex  p-5 bg-gray-700 text-white  px-20 h-16 justify-between w-2/3 m-4 self-center rounded-lg	">
      <ul className="flex text-3xl mr-2 ml-2 justify-between">
        <li>
          <Link
            href="https://www.facebook.com/yaks10"
            target="_blank"
            className="mr-10 hover:text-customGreen "
          >
            <AiFillFacebook />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@HakSukiasyan/videos"
            target="_blank"
            className="mr-10 hover:text-customGreen "
          >
            <AiFillTwitterSquare />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/sukiasyan"
            target="_blank"
            className="mr-10 hover:text-customGreen "
          >
            <AiOutlineGithub />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/hakob-sukiasyan"
            target="_blank"
            className="mr-10 hover:text-customGreen "
          >
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@HakSukiasyan/videos"
            target="_blank"
            className="mr-10 hover:text-customGreen "
          >
            <AiFillYoutube />
          </Link>
        </li>
      </ul>
      <div className=" text-left ">
        <Link href="/about" className=" hover:text-customGreen ">
          © H. Sukiasyan 2023
        </Link>
      </div>
    </div>
  );
};
