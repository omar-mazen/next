import { FaBars, FaRegBell } from "react-icons/fa";
import ProfilePic from "./ProfilePic";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import InputeSearch from "./InputeSearch";
import Link from "next/link";

export default function ClientNavBar() {
  return (
    <section className="bg-[#1F1F28] text-white">
      <nav className="container   px-[50px] flex items-center justify-between flex-col md:flex-row-reverse gap-5 md:gap-0">
        <div className="flex items-center gap-5">
          <span className="text-xl font-bold">حِـرَفـي</span>
          <Link href={"/"}>
            <img
              src="/char-blob.png"
              alt="شعار"
              className="w-15 h-15 rounded-full"
            />
          </Link>

          <FaBars className="text-xl cursor-pointer" />
        </div>

        <InputeSearch />

        <div className="flex items-center gap-6">
          <ProfilePic src={""} />
          <IoSunnyOutline className="h-[25px] w-[25px]" />
          <MdFavoriteBorder className="h-[25px] w-[25px]" />
          <FaRegBell className="h-[25px] w-[25px]" />
        </div>
      </nav>
    </section>
  );
}

{
  /* <IoSunny /> */
}
