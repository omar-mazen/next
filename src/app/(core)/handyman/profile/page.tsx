"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import resturantChair from "../../../../assets/resturantchair.avif"
import cupboard from "../../../../assets/cupboard.webp"
import door from "../../../../assets/door.webp"
import profileAvatatr from "../../../../assets/avatar.avif"
import reviewimage1 from "../../../../assets/reviewimage1.avif"
import reviewimage2 from "../../../../assets/reviewimage2.jpg"
import reviewimage3 from "../../../../assets/reviewimage3.webp"
import reviewimage4 from "../../../../assets/reviewimage4.avif"
import reviewimage5 from "../../../../assets/reviewimage5.jpeg"

import {
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const Profile: NextPage = () => {
  const [activeTab, setActiveTab] = useState<"portfolio" | "workHistory">(
    "portfolio"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <Head>
        <title>حرفي - ملف أحمد عادل</title>
        <meta name="description" content="ملف حرفي" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}

      {/* Profile Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 relative mr-4 ml-2">
              <Image
                src={profileAvatatr}
                alt="Profile"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">احمد عادل</h1>
              <div className="flex items-center text-gray-300 mt-1">
                <FaMapMarkerAlt className="mr-1" />
                <span>نجار • الجيزة، الهرم، سهل حمزة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4">
        <div className="flex border-b border-gray-800 mt-4">
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "portfolio"
                ? "border-b-2 border-red-500 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("portfolio")}
          >
            معرض الأعمال
          </button>
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "workHistory"
                ? "border-b-2 border-red-500 text-white"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("workHistory")}
          >
            سجل الأعمال
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3 ml-5 gap-1">
                <div className="mr-2 ">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>منضم منذ : 3 شهر</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="mr-2 ml-1">
                  <FaStar className="text-yellow-400" />
                </div>
                <div>التقييم : 5.0 (4)</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="mr-2 ml-1">
                  <FaCheck className="text-green-500" />
                </div>
                <div>المهام المكتملة : 4</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="mr-2 ml-1">
                  <FaTimes className="text-red-500" />
                </div>
                <div>المهام النشطة : 0</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="mr-2 ml-1">
                  <FaPhone className="text-gray-400" />
                </div>
                <div dir="ltr">01065242264</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="mr-2 ml-1">
                  <FaPhone className="text-gray-400" />
                </div>
                <div dir="ltr">01095424911</div>
              </div>
              <div className="flex items-center">
                <div className="mr-2 ml-1">
                  <FaWhatsapp className="text-gray-400" />
                </div>
                <div dir="ltr">01095424911</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3">نبذة مختصرة :</h3>
              <p className="text-gray-300 text-sm">
                 أنا احمد عادل، نجار محترف خبرة أزيد عن 10 سنوات في مجال
                النجارة، امتلك مهارات متقدمة في تصميم وتصنيع وتركيب الأثاث
                والأبواب والديكورات الخشبية المختلفة. أعتز بالإهتمام بالتفاصيل
                والدقة في كل مشروع أعمل عليه وأسعى دائماً لتحقيق رضا العملاء من
                خلال تقديم عمل متقن وخدمة عالية الجودة.
              </p>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-gray-800 rounded-lg p-6">
            {activeTab === "portfolio" ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">معرض الأعمال</h2>
                  <button className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <span>+</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Portfolio Items */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-48 relative hidden md:block">
                      <Image
                        src={resturantChair}
                        alt="مقاعد خشبية لمطعم"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-center">
                        مقاعد خشبية لمطعم
                      </h3>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-48 relative hidden md:block">
                      <Image
                        src={cupboard}
                        alt="تصميم وتركيب خزانة ملابس"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-center">
                        تصميم وتركيب خزانة ملابس
                      </h3>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="h-48 relative hidden md:block">
                      <Image
                        src={door}
                        alt="تصميم وتركيب باب خشبي"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-center">
                        تصميم وتركيب باب خشبي
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">سجل الأعمال</h2>
                </div>
                <div className="space-y-6">
                  {/* Work History Item */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-bold text-red-500">
                        مقاعد خشبية لمطعم
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      قمت بالبحث عن مصمم ماهر لتصميم وتصنيع مقاعد خشبية لمطعمي
                       الجديد وبعد تجربة المطعم وجدت أن الأثاث رائع
                      و يتميز بمتانة عالية وجمال وأناقة خاصة. مما يميز 
                       المطعم وأسلوبه ومريحة للغاية وتناسب تماماً احتياجات
                      الزبائن، مما يجعل تجربة تناول الطعام في الأجواء الخلابة
                      ممتعة ومريحة.
                    </p>
                    <div className="flex overflow-x-auto space-x-4 pb-2">
                      {/* Project Images */}
                      {[reviewimage1, reviewimage2, reviewimage3, reviewimage4, reviewimage5].map((img,i) => (
                        <div
                          key={i}
                          className="w-24 h-24 relative flex-shrink-0 hidden md:block"
                        >
                          <Image
                            src={img}
                            alt={`صورة العمل`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-400 text-sm mt-2">15/6/2024</div>
                  </div>

                  {/* Another Work History Item */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-bold text-red-500">
                        تصميم وتركيب خزانة ملابس
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm mt-2">10/6/2024</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
