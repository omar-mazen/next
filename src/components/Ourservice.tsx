import React from "react";

export const crafts = [
  { icon: "/th.jpg", title: "نجار" },
  {
    icon:
      "https://th.bing.com/th/id/OIP.fNwkX3wXquhwKLmSUW-VcgHaEU?w=320&h=187&c=7&r=0&o=5&pid=1.7",
    title: "سباك",
  },
  {
    icon:
      "https://tse2.mm.bing.net/th?id=OIP.KAOJ0o0Ef202s_cr7-1ZmgHaD_&rs=1&pid=ImgDetMain",
    title: "حداد",
  },
  {
    icon: "https://i.ytimg.com/vi/twJAXUs4blw/maxresdefault.jpg",
    title: "نقاش",
  },
  {
    icon: "https://i.ytimg.com/vi/NLClCwkbheE/maxresdefault.jpg",
    title: "مبيض محاره",
  },
  {
    icon:
      "https://tse1.mm.bing.net/th?id=OIP.9lbxUpRFinktV4EidlH_OAHaE7&rs=1&pid=ImgDetMain",
    title: "عامل بناء",
  },
  {
    icon:
      "https://tse3.mm.bing.net/th?id=OIP.kG-C-L7-iuvwhxCxLWtTNAHaE7&w=1024&h=682&rs=1&pid=ImgDetMain",
    title: "كهربائي",
  },
  {
    icon:
      "https://5.imimg.com/data5/SELLER/Default/2021/8/XL/OQ/KR/35540727/inverter-ac-repairing-service-500x500.jpg",
    title: "فني تكييف وتبريد",
  },
  {
    icon:
      "https://img.freepik.com/free-photo/full-shot-man-crouched-car_23-2148270682.jpg",
    title: "ميكانيكي",
  },
  {
    icon:
      "https://teachergypsumboard.com/wp-content/uploads/2022/04/%D8%B9%D8%A7%D9%85%D9%84-%D8%AC%D8%A8%D8%B3-%D8%A8%D9%88%D8%B1%D8%AF-1.png",
    title: "عامل جبس",
  },
  {
    icon:
      "https://tse2.mm.bing.net/th?id=OIP.SwDW8pV0DH8ADNBoawOliwHaEK&rs=1&pid=ImgDetMain",
    title: "عامل زجاج",
  },
];

function Ourservice() {
  return (
    <section className=" bg-white mb-[50px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-16">
          خدماتنا
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {crafts.map((item, index) => (
            <div
              key={index}
              className="w-[100px] relative group overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url('${item.icon}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Title */}
              <div className="relative z-10 flex items-center justify-center h-[180px] px-4">
                <h1 className="text-white text-3xl font-bold text-center drop-shadow-lg">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ourservice;
