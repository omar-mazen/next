"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Router from "next/router";
import forgetPassword from "@/assets/Forgot password.svg";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords
    if (password !== confirmPassword) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    if (password.length < 8) {
      setError("يجب أن تكون كلمة المرور 8 أحرف على الأقل");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // On success redirect to login
      Router.push("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("حدث خطأ أثناء إعادة تعيين كلمة المرور");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Head>
        <title>إعادة تعيين كلمة المرور</title>
        <meta name="description" content="إعادة تعيين كلمة المرور" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="relative z-10 p-6">
              <Image
                src={forgetPassword}
                alt="إعادة تعيين كلمة المرور"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Reset Password form */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 rtl:text-right">
              إعادة تعيين كلمة المرور
            </h1>
            <p className="text-gray-400 mb-8 rtl:text-right">
              أدخل كلمة المرور الجديدة
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-900/30 border border-red-500 text-red-300 p-3 rounded text-right">
                  {error}
                </div>
              )}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="كلمة المرور الجديدة"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="تأكيد كلمة المرور الجديدة"
                  className="w-full bg-gray-800 rounded p-4 pr-10 text-right"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري التحديث..." : "تحديث كلمة المرور"}
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

export default ResetPassword;
