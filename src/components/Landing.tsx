import Image from "next/image";
import React from "react";

function Landing() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-0">
          <div className="m-auto">
            <div className="flex flex-col-reverse md:flex-row-reverse pt-[100px]">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mx-auto mt-[200px] sm:mt-0">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-red-200">
                  <div className="w-[90%] h-[90%] flex items-center justify-center rounded-full bg-red-600 relative">
                    <Image
                      src="/Image-Container.png"
                      alt="حرفى"
                      width={400}
                      height={400}
                      className="object-contain translate-y-[-70px] "
                    />
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right max-w-lg pr-[80px]">
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
                  بتدور على <span className="text-red-600">صنايعي شاطر</span>؟{" "}
                  <br />
                  <span className="text-red-600">حرفي</span> يوصلك بيه في ثواني
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  سباكة، كهرباء، نجارة، تكييف، دهانات، وصيانة
                  <br /> منزلية بكل أنواعها. كله عندك بضغطة زر مع حرفي.
                </p>
                <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition">
                  احجز خدمة الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
