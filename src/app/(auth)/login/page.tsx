import Head from "next/head";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaUser, FaLock } from "react-icons/fa";
import illustration from "./login-illustration.svg";
import Link from "next/link";
const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl font-bold text-right mb-6">تسجيل الدخول</h2>

          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg p-4 pr-10 text-right"
                placeholder="البريد الإلكتروني"
              />
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="password"
                className="w-full bg-gray-800 rounded-lg p-4 pr-10 text-right"
                placeholder="كلمة المرور"
              />
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex justify-between items-center gap-6 mt-4">
              <label className="flex items-center gap-2 cursor-pointer grow">
                <input type="radio" name="userType" className="form-radio" />
                <span>عميل</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer grow">
                <input
                  type="radio"
                  name="userType"
                  defaultChecked
                  className="form-radio"
                />
                <span>حرفي</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-bold transition-colors"
            >
              تسجيل الدخول
            </button>

            <div className="relative flex items-center justify-center text-gray-400 my-4">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4">أو</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white py-3 rounded-lg font-bold transition-colors"
            >
              <FaGoogle />
              <span>تسجيل الدخول باستخدام حساب Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white py-3 rounded-lg font-bold transition-colors"
            >
              <FaFacebook />
              <span>تسجيل الدخول باستخدام حساب Facebook</span>
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
