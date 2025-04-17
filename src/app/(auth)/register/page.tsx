// pages/signup.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaGoogle,
  FaFacebook,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import Illustration from "../../../assets/Signup-img.svg";
const SignUp = () => {
  let showPassword = false;
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        {/* Sign up form */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-8 rtl:text-right">
              إنشاء حساب جديد
            </h1>

            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="إسم المستخدم"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
                />
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
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
                className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded transition"
              >
                إنشاء حساب
              </button>

              <div className="flex items-center justify-center my-4">
                <span className="border-t border-gray-600 flex-grow"></span>
                <span className="px-4 text-gray-400">أو</span>
                <span className="border-t border-gray-600 flex-grow"></span>
              </div>

              <button
                type="button"
                className="w-full bg-transparent border border-gray-700 text-white py-3 rounded flex items-center justify-center space-x-2 mb-4"
              >
                <FaGoogle className="text-red-500" />
                <span className="rtl:mr-2 rtl:ml-0">
                  التسجيل باستخدام حساب Google
                </span>
              </button>

              <button
                type="button"
                className="w-full bg-transparent border border-gray-700 text-white py-3 rounded flex items-center justify-center space-x-2"
              >
                <FaFacebook className="text-blue-500" />
                <span className="rtl:mr-2 rtl:ml-0">
                  التسجيل باستخدام حساب Facebook
                </span>
              </button>

              <div className="text-center mt-6">
                <span className="text-gray-400">لديك حساب بالفعل؟</span>
                <a href="/login" className="text-red-500 mr-1">
                  سجل دخولك
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="relative z-10 p-6">
            {/*   <Image
                src={illustration}
                alt="Sign up illustration"
                width={500}
                height={500}
                className="object-contain"
              /> */}
              <Illustration className="w-[500px] h-[500px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
