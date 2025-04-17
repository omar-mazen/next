import React from "react";
import UserIcon from "@/assets/icons/user.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import StarIcon from "@/assets/icons/star.svg";

const data = {
  title: "تصميم وتنفيذ ديكور غرفة المعيشة",
  created_at: "2025/03/15",
  price: "500",
  type_of_pricing: "غرفة",
  description:
    "قمت بتصميم وتنفيذ ديكور كامل لغرفة المعيشة متضمناً تركيب أرفف خشبية وتغيير الألوان وتنسيق الإضاءة. تم العمل خلال 5 أيام وشمل توريد جميع المواد اللازمة والتركيب.",
  images: [
    {
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
  ],
  craftsman_rating: [
    {
      rating: 4.5,
      comment:
        "العمل كان ممتاز وتم إنجازه في الوقت المحدد. الديكور أعجبنا كثيراً وأضاف لمسة جمالية للمنزل. شكراً على المجهود الرائع.",
    },
  ],
  clint_rating: [
    {
      rating: 5,
      comment:
        "عميل محترم جداً وتعاونه كان ممتاز. سعدت بالعمل معه وأتمنى التعاون معه مرة أخرى في المستقبل.",
    },
  ],
  client_data: [
    {
      name: "أحمد محمد علي",
      address: "الرياض، حي النزهة، شارع العليا",
      phone: "0501234567",
    },
  ],
};

const Page = () => {
  return (
    <div className="custom-container mt-10 grid h-full items-start space-y-10 divide-text-color/20 md:mt-0 md:grid-cols-[1fr,300px] md:space-y-0 md:divide-x">
      <AboutClient client={data?.client_data[0]} />
      <div className="relative min-h-dvh grid h-full content-baseline border-2 border-text-color/20 px-6 pt-8 md:col-start-1 md:row-start-1 md:px-0 md:pb-0 md:pl-6 md:pt-10 md:border-0 md:border-l md:rounded-none">
        <p className="mb-5 bg-primary-background px-2 text-medium md:hidden md:text-h3 mb:absolute mb:right-6 mb:top-0 mb:translate-y-[-50%]">
          تفاصيل المهمه
        </p>
        <p className=" text-h2 ">{data?.title}</p>

        <div className=" mt-2 flex items-center gap-10 text-gray">
          <span className="flex items-center gap-2">
            <ClockIcon className="w-6 h-6" />
            <span className=" text-small">
              تم الانهاء يوم {`${data?.created_at}`}
            </span>
          </span>
        </div>
        <div className="mt-10">
          <span className="inline-block text-gray">السعر:</span>
          <span className=" inline-block pr-3 text-primary-color">
            {data?.price}
            <span className=" text-gray"> لكل {data?.type_of_pricing}</span>
          </span>
        </div>
        <div className="my-5">
          <span className="text-gray">الوصف:</span>
          <p className="mt-5">{data?.description}</p>
        </div>
        <div className="flex gap-5 overflow-scroll py-2">
          {data?.images?.map((img, i) => {
            const imageUrl = `${img.image}`;

            return (
              <div key={i} className="w-32 min-w-32">
                <figure className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-primary-background bg-[url('/defaultImg.png')] bg-center bg-no-repeat text-text-color">
                  <img
                    src={imageUrl}
                    alt=""
                    className=" h-full w-full object-cover object-center"
                  />
                </figure>
              </div>
            );
          })}
        </div>
        <div className=" border-b border-t border-text-color/20 py-5">
          <p className="mb-5 text-h3">تقييم العميل لك</p>
          <div className="flex max-w-[600px] flex-col items-center rounded-lg bg-secondary-background px-6 py-4">
            <div className="flex ">
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
            </div>
            <p className=" mt-5">{data?.craftsman_rating[0]?.comment}</p>
          </div>
        </div>
        <div className="pb-5">
          <p className="my-5 text-h3">تقييمك للعميل</p>
          <div className="flex max-w-[600px] flex-col items-center rounded-lg bg-secondary-background px-6 py-4">
            <div className="flex ">
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
              <StarIcon className="w-6 h-6 text-amber-300" />
            </div>
            <p className=" mt-5">{data?.clint_rating[0]?.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
function AboutClient({ client }) {
  return (
    <div className="relative h-full rounded-lg border-2 border-text-color/20 px-6 pb-4 pt-8 md:col-start-2 md:row-start-1 md:border-0 md:px-8 md:pb-0 md:pt-10">
      <p className="absolute right-6 top-0 mb-5 translate-y-[-50%] bg-primary-background px-2 text-medium md:relative md:right-0 md:translate-y-0 md:pl-0 md:text-h3">
        معلومات عن العميل
      </p>
      <div className=" space-y-3">
        <div className=" flex  items-center gap-3 text-gray">
          <span className=" flex items-center gap-3">
            <UserIcon className="w-6 h-6" />
            <span>الاسم :</span>
          </span>
          <span className=" text-small text-text-color">{client?.name}</span>
        </div>
        <div className=" flex  items-center gap-3 text-gray">
          <span className=" flex items-center gap-3">
            <MapPinIcon className="w-6 h-6" />
            <span className=" text-nowrap">العنوان :</span>
          </span>
          <span className=" text-small text-text-color">{client?.address}</span>
        </div>
        <div className=" flex  items-center gap-3 text-gray">
          <span
            style={{ scale: "-1", rotate: "90deg" }}
            className=" flex items-center gap-3"
          >
            <PhoneIcon className="w-6 h-6" />
          </span>
          <span>رقم الهاتف :</span>

          <a
            href={`tel:+2${client?.phone}`}
            className=" text-small text-text-color"
          >
            {client?.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Page;
