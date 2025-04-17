import FeaturesBox from "./FeaturesBox";

function Service() {
  const items = [
    {
      icon: "/Frame (1).png",
      title: "حجز سريع وسهل",
      dosc: "من خلال الموقع أو التطبيق، تقدر تحجز الصنايعي اللي محتاجه في كام خطوة بسيطة.",
    },
    {
      icon: "/Frame.png",
      title: "صنايعية موثوقين",
      dosc: "كل حرفي بيعدي على فحص وتقييم، علشان نضمن إن الشغل يطلع على أعلى مستوى.",
    },
    {
      icon: "/Group (1).png",
      title: " أوقات واضحة ومناسبة",
      dosc: "بنوصلك بأقرب صنايعي متاح في الوقت اللي يناسبك، علشان وقتك مهم.",
    },
    {
      icon: "/Group.png",
      title: " أسعار واضحة ومناسبة",
      dosc: "مفيش مفاجآت! بتعرف السعر قبل ما تحجز، وكل حاجة بشفافية.",
    },
  ];
  return (
    <section className="bg-[#FEF1F3] min-h-screen flex items-center justify-center -mt-[100px] md:-mt-[200px] relative z-10">
      <div className="container mx-auto px-[50px]">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold pt-[40px]">
          لماذا تختارنا
        </h2>
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between mt-10">
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3">
            {items.map((item) => (
              <div
                className="text-center border-2 border-solid rounded-3xl border-gray-400"
                key={item.title}
              >
                <FeaturesBox
                  icon={item.icon}
                  title={item.title}
                  dosc={item.dosc}
                />
              </div>
            ))}
          </div>

          {/* Side Image */}
          <div className="w-full lg:w-1/3 flex justify-center mb-10 lg:mb-0 ">
            <img
              src="/Frame 4.png"
              alt="لماذا تختارنا"
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
