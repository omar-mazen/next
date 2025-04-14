import Head from "next/head";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaUser, FaLock } from "react-icons/fa";
import illustration from "./login-illustration.svg";
import Link from "next/link";
import facebookIcon from "../../../assets/facebook.svg";
import googleIcon from "../../../assets/icons8-google.svg";
import workerIcon from "../../../assets/icons/worker.svg";
import clientIcon from "../../../assets/icons/client.svg";
import check from "../../../assets/icons/check.svg";

const Page = () => {
  const userTypeString: "handyman" | "client" = "client";
  return (
    <div className="min-h-screen bg-secondary-background text-text-color flex items-center justify-center p-4">
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl font-bold text-right mb-6 justify-center ">
            تسجيل الدخول
          </h2>

          <form className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg p-4 pr-10 text-right"
                placeholder="البريد الإلكتروني"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                className="w-full bg-gray-800 rounded-lg p-4 pr-10 text-right"
                placeholder="كلمة المرور"
              />
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="mb-8 flex w-full items-center justify-around gap-8">
              <UserType
                icon={workerIcon}
                isActive={userTypeString == "client"}
                text={"حرفي"}
              />
              <UserType
                icon={clientIcon}
                isActive={userTypeString != "client"}
                text={"عميل"}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-bold transition-colors"
            >
              تسجيل الدخول
            </button>
            <div className="flex justify-center">
              <span>نسيت كلمة المرور؟ </span> &nbsp;
              <Link
                className="text-red-500 border-b-[1px] border-red-500 pb-1 "
                href="/forget-password"
              >
                تغيير كلمة المرور
              </Link>
            </div>
            <div className="relative flex items-center justify-center text-gray-400 my-4">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4">أو</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-evenly bg-transparent border border-gray-700 text-white py-3 rounded-4xl font-bold transition-colors"
            >
              <span>تسجيل الدخول باستخدام حساب Google</span>
              <Image src={googleIcon} width={40} alt="google icno" />
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-evenly bg-transparent border border-gray-700 text-white py-3 rounded-4xl font-bold transition-colors"
            >
              <span>تسجيل الدخول باستخدام حساب Facebook</span>
              <Image src={facebookIcon} width={40} alt="facebook icon" />
            </button>

            <div className="text-center mt-6">
              <span className="text-gray-400">ليس لديك حساب؟</span>{" "}
              <Link href="register" className="text-red-500 hover:text-red-400">
                إنشاء حساب
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative w-full max-w-md h-[800px]">
            <Image
              src={illustration}
              alt="Login Illustration"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const UserType = ({ icon, isActive, text }:{icon:any,isActive:boolean,text:string}) => {
  return (
    <div
      className={`relative flex flex-1 cursor-pointer items-center justify-evenly rounded-lg border p-4 hover:backdrop-brightness-150 hover:transition-all hover:duration-200  hover:ease-in-out ${
        isActive
          ? "border-primary-color/20 bg-primary-color/50"
          : "border-text-color/5 bg-text-color/10"
      }`}
    >
      <Image src={icon} height={40} alt="icon" />
      <span
        className={`${
          isActive ? "" : " hidden"
        } absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] rounded-full bg-white text-primary-color`}
      >
        <Image src={check} alt="check icon" width={15} height={15} />
      </span>
      <p className="text-center text-large font-semibold">{text}</p>
    </div>
  );
};
