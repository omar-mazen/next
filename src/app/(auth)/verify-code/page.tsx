"use client";
import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import forgetPassword from "@/assets/Forgot password.svg";

const VerifyCode: React.FC = () => {
  const [pins, setPins] = useState<string[]>(['', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  let Router=useRouter()

  const handlePinChange = (index: number, value: string) => {
    // Allow only numbers
    if (value && !/^\d+$/.test(value)) return;

    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    // Auto focus on next input
    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (
      e.key === "Backspace" &&
      !pins[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Check if pasted content is numeric and has valid length
    if (/^\d+$/.test(pastedData) && pastedData.length <= 4) {
      const digits = pastedData.split("").slice(0, 4);
      const newPins = [...pins];

      digits.forEach((digit, index) => {
        if (index < 4) {
          newPins[index] = digit;
        }
      });

      setPins(newPins);

      // Focus on appropriate input after paste
      if (digits.length < 4 && inputRefs.current[digits.length]) {
        inputRefs.current[digits.length]?.focus();
      }
    }
  };

  const handleResendCode = async () => {
    // Simulate API call to resend code
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Error resending code:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const code = pins.join("");
    if (code.length !== 4) return;

    setIsVerifying(true);

    try {
      // Simulate API verification
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // After verification success, redirect to reset password page
      Router.push("/reset-password");
    } catch (error) {
      console.error("Error verifying code:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Head>
        <title>التحقق من الرمز</title>
        <meta name="description" content="التحقق من رمز استعادة كلمة المرور" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
        {/* Illustration - Hidden on medium and smaller screens */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="relative z-10 p-6">
              <Image
                src={forgetPassword}
                alt="التحقق من الرمز"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Verification form */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 rtl:text-right">
              أدخل رمز التحقق
            </h1>
            <p className="text-gray-400 mb-8 rtl:text-right">
              لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني. يرجى إدخال الرمز
              المكون من 4 أرقام.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-center gap-3 dir-ltr">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    className="w-16 h-16 text-center text-xl font-bold bg-gray-800 rounded"
                    value={pins[index]}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    required
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded transition mt-6"
                disabled={isVerifying || pins.join("").length !== 4}
              >
                {isVerifying ? "جاري التحقق..." : "تحقق من الرمز"}
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-400 mb-2">
                  لم تستلم الرمز؟{" "}
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={handleResendCode}
                  >
                    إعادة إرسال الرمز
                  </button>
                </p>
              </div>
            </form>

            <div className="text-center mt-8">
              <Link href="/forgot-password" className="text-red-500">
                العودة إلى صفحة استعادة كلمة المرور
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
