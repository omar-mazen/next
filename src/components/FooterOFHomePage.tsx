import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterOFHomePage() {
  return (
    <footer className="bg-[#081035] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0">حرفي</div>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-blue-300 cursor-pointer">الرئيسية</li>
          <li className="hover:text-blue-300 cursor-pointer">الخدمات</li>
          <li className="hover:text-blue-300 cursor-pointer">تواصل معنا</li>
        </ul>

        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          <a href="#" className="hover:text-blue-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className=" mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لحرفي
      </div>
    </footer>
  );
}

export default FooterOFHomePage;
