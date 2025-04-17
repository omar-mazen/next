import React from "react";
import Link from "next/link";
import UserIcon from "@/assets/icons/user.svg";
import MapIcon from "@/assets/icons/map-pin.svg";
import ChatIcon from "@/assets/icons/chat.svg";
import KeyIcon from "@/assets/icons/key.svg";
const layout = ({ children }) => {
  return (
    <html lang="ar">
      <body className=" bg-primary-background text-text-color dark">
        <main className="w-full">
          <div className=" grid h-full grid-cols-[auto_1fr] gap-x-5 overflow-hidden">
            <ul className="min-h-dvh h-full w-full divide-y divide-text-color/20 overflow-y-auto border-l border-text-color/20">
              <li
                className={`cursor-pointer px-6 py-6 transition-all duration-200 ease-in-out hover:backdrop-brightness-90`}
              >
                <Link
                  href={"update-account"}
                  className="flex items-center gap-2"
                >
                  <UserIcon className="w-6 h-6" />
                  <span className="hidden sm:block">الحساب</span>
                </Link>
              </li>
              <li
                className={`cursor-pointer px-6 py-6 transition-all duration-200 ease-in-out hover:backdrop-brightness-90 
           `}
              >
                <Link
                  href={"update-password"}
                  className="flex items-center gap-2"
                >
                  <KeyIcon className="w-6 h-6" />
                  <span className="hidden sm:block">كلمة المرور</span>
                </Link>
              </li>
              <>
                {/* <li
                  className={`cursor-pointer px-6 py-6 transition-all duration-200 ease-in-out hover:backdrop-brightness-90`}
                >
                  <Link
                    href={"update-work-locations"}
                    className="flex items-center gap-2"
                  >
                    <MapIcon className="w-6 h-6" />
                    <span className="hidden sm:block">
                      المدن المتاح للعمل بها
                    </span>
                  </Link>
                </li>
                <li
                  className={`cursor-pointer px-6 py-6 transition-all duration-200 ease-in-out hover:backdrop-brightness-90`}
                >
                  <Link
                    href={"update-contacts"}
                    className="flex items-center gap-2"
                  >
                    <ChatIcon className="w-6 h-6" />
                    <span className="hidden sm:block">وسائل التواصل</span>
                  </Link>
                </li> */}
              </>
            </ul>
            <div className="mr-2 overflow-auto py-5 sm:py-10">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default layout;
