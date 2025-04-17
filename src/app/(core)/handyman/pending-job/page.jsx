import React from "react";
import Button from "@/components/Button";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import UserClockIcon from "@/assets/icons/user-clock.svg";
import StarIcon from "@/assets/icons/star.svg";
import CheckCircle from "@/assets/icons/check-circle.svg";
import Image from "next/image";

const data = {
  // Task details
  id: 1,
  title: "صناعة مجموعة اكسسوارات خشبية",
  description:
    "صناعة مجموعة اكسسوارات منزلية خشبية تشمل علب تخزين مزخرفة، حوامل للشموع، واطارات صور بأسلوب ريفي. يجب استخدام خشب الزان المعالج والتشطيب بالورنيش الطبيعي. المنتجات يجب أن تكون متينة وذات جودة عالية مع التركيز على التفاصيل الدقيقة في النقوش.",
  price: "350",
  type_of_pricing: "قطعة",
  start_date: "2025-04-05",
  end_date: "2025-04-25",
  created_at: "2025-03-28",
  is_finished: "no",
  phone: "01098765432",
  city: "الاسكندرية",

  // Client data
  client_data: {
    name: "أحمد محمد",
    address: "القاهرة، مصر",
    phone: "01234567890",
    joined_since: "13", // in months
    rating: "3.5",
    rating_count: "4",
    completed_tasks: "5",
  },

  // Task images
  images: [
    {
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
  ],

  // Additional task details that might be useful
  categories: ["أعمال يدوية", "نجارة", "اكسسوارات منزلية"],
  skills_required: ["نجارة خشبية", "حفر ونقش", "تشطيب خشب"],
  status: "قيد التنفيذ",
};

const page = () => {
  return (
    <div className="custom-container mt-10 grid h-full items-start md:mt-0 md:grid-cols-[1fr_300px] md:space-y-0">
      <AboutClient />
      <div className="relative grid min-h-dvh h-full content-baseline rounded-lg border-2 border-text-color/20 px-6 pt-8 md:col-start-1 md:row-start-1 md:px-0 md:pb-0 md:pl-6 md:pt-10 mt-5 md:mt-0 md:border-0 md:border-l md:rounded-none">
        <p className="mb-5 bg-primary-background px-2 text-medium md:hidden md:text-h3 mb:absolute mb:right-6 mb:top-0 mb:translate-y-[-50%]">
          تفاصيل المهمه
        </p>
        <div className="flex items-center justify-between">
          <p className=" text-h2 ">{data?.title}</p>
          <Button additionalStyle={` text-nowrap py-2`}>{"إلغاء"}</Button>
        </div>
        <div className=" mt-5 flex items-center gap-10 text-gray">
          <span className="flex items-center gap-2">
            <MapPinIcon className="w-6 h-6" />
            <span className=" text-small">{data?.city}</span>
          </span>
          <span className="flex items-center gap-2">
            <UserClockIcon className="w-6 h-6" />
            <span className=" text-small">تم النشر {data?.created_at}</span>
          </span>
        </div>
        <div className="mt-10">
          <span className="inline-block text-gray">السعر:</span>
          <span className=" inline-block pr-3 text-primary-color">
            {data?.price}
            <span className=" text-gray"> لكل {data?.type_of_pricing}</span>
          </span>
        </div>
        <div className="my-10 grid w-fit grid-cols-[auto_auto] items-center gap-5">
          <span className="text-gray">تاريخ البدأ</span>
          <input
            type="date"
            disabled
            value={new Date().toISOString().split("T")[0]}
            className="!cursor-default appearance-none rounded-lg bg-secondary-background px-4 py-2 text-medium text-opacity-100 !opacity-100"
          />
          {data?.end_date && (
            <>
              <span className="text-gray">تاريخ الانتهاء</span>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                disabled
                value={
                  new Date(Date.now() + 1000 * 60 * 60 * 24 * 10)
                    .toISOString()
                    .split("T")[0]
                }
                className="!cursor-default appearance-none rounded-lg bg-secondary-background px-4 py-2 text-medium text-opacity-100  !opacity-100 "
              />
            </>
          )}
        </div>
        <div className="mb-5">
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
      </div>
    </div>
  );
};
function AboutClient() {
  return (
    <div className="relative h-full rounded-lg border-2 border-text-color/20 px-6 pb-4 pt-8 md:col-start-2 md:row-start-1 md:border-0 md:px-8 md:pb-0 md:pt-10">
      <p className="absolute right-6 top-0 mb-5 translate-y-[-50%] bg-primary-background px-2 text-medium md:relative md:right-0 md:translate-y-0 md:pl-0 md:text-h3">
        معلومات عن العميل
      </p>
      <div className="space-y-3">
        <div className=" flex  items-center gap-3 text-gray">
          <span className=" flex items-center gap-3">
            <UserClockIcon className="w-6 h-6" />
            <span> منضم منذ :</span>
          </span>
          <span className=" text-small text-text-color">13 شهر</span>
        </div>
        <span className=" flex  items-center gap-3 text-gray">
          <span className=" flex items-center gap-3">
            <StarIcon className="w-6 h-6" />
            <span>التقييم :</span>
          </span>
          <span className=" text-small text-text-color">{`3.5 (4)`}</span>
        </span>
        <div className=" flex  items-center gap-3 text-gray">
          <span className=" flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            <span>المهام المتكلة :</span>
          </span>
          <span className=" text-small text-text-color">5</span>
        </div>
      </div>
    </div>
  );
}

export default page;
