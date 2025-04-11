"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/navigation";
import forgetPassword from "@/assets/Forgot password.svg";
const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const Router=useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Router.push("/verify-code");
    } catch (error) {
      console.error("Error sending reset code:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Head>
        <title>استعادة كلمة المرور</title>
        <meta name="description" content="استعادة كلمة المرور" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        {/* Illustration - Hidden on medium and smaller screens */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="relative z-10 p-6">
              <Image
                src={forgetPassword}
                alt="استعادة كلمة المرور"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Forgot Password form */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 rtl:text-right">
              استعادة كلمة المرور
            </h1>
            <p className="text-gray-400 mb-8 rtl:text-right">
              أدخل بريدك الإلكتروني لتلقي رمز إعادة تعيين كلمة المرور
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال رمز التحقق"}
              </button>

              <div className="text-center mt-6">
                <Link href="/login" className="text-red-500">
                  العودة إلى تسجيل الدخول
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
