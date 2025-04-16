import React from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import UserIcon from "@/assets/icons/user.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
const data = {
  // Task details
  title: "صناعة مجموعة اكسسوارات خشبية",
  description:
    "صناعة مجموعة اكسسوارات منزلية خشبية تشمل علب تخزين مزخرفة، حوامل للشموع، واطارات صور بأسلوب ريفي. يجب استخدام خشب الزان المعالج والتشطيب بالورنيش الطبيعي. المنتجات يجب أن تكون متينة وذات جودة عالية مع التركيز على التفاصيل الدقيقة في النقوش.",
  price: "350",
  type_of_pricing: "قطعة",
  start_date: "2025-04-05",
  end_date: "2025-04-25",
  is_finished: "no", // or "yes"
  phone: "01098765432",

  // Client data
  client_data: [
    {
      name: "أحمد محمد",
      address: "القاهرة، مصر",
      phone: "01234567890",
    },
  ],

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
};
const Page = () => {
  return (
    <div className="custom-container mt-10 grid h-full w-full items-start space-y-10  md:mt-0 md:grid-cols-[1fr_300px] md:space-y-0">
      <div className="relative h-full rounded-lg border-2 border-text-color/20 px-6 pb-4 pt-8 md:col-start-2 md:row-start-1 md:border-0 md:px-8 md:pb-0 md:pt-10">
        <p className="absolute right-6 top-0 mb-5 translate-y-[-50%] bg-primary-background px-2 text-medium md:relative md:right-0 md:translate-y-0 md:pl-0 md:text-h3">
          معلومات عن العميل
        </p>

        <div className="space-y-3">
          <div className=" flex  items-center gap-3 text-gray">
            <span className=" flex items-center gap-3">
              <UserIcon className=" w-6 h-6" />
              <span>الاسم :</span>
            </span>
            <span className=" text-small text-text-color">
              {data.client_data[0]?.name}
            </span>
          </div>
          <div className=" flex  items-center gap-3 text-gray">
            <span className=" flex gap-3">
              <MapPinIcon className=" w-6 h-6" />
              <span className=" text-nowrap">العنوان :</span>
            </span>
            <span className=" text-small text-text-color">
              {data.client_data[0]?.address}
            </span>
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
              href={`tel:+2${data?.phone || data.client_data[0]?.phone}`}
              className=" text-small text-text-color"
            >
              {data?.phone || data.client_data[0]?.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="relative grid min-h-dvh h-full w-full content-baseline rounded-lg border-2 border-text-color/20 px-6 pt-8 md:col-start-1 md:row-start-1 md:border-0 md:border-l md:rounded-none md:px-0 md:pb-0 md:pl-6 md:pt-10 mt-5 md:mt-0 ">
        <p className="mb-5 bg-primary-background px-2 text-medium md:hidden md:text-h3 mb:absolute mb:right-6 mb:top-0 mb:translate-y-[-50%]">
          تفاصيل المهمه
        </p>
        <div className="flex items-center justify-between">
          <p className=" text-h2 ">{data?.title}</p>
          <Button
            additionalStyle={` text-nowrap py-2  ${
              data?.is_finished == "yes" ? "!px-3 w-fit text-xsmall" : ""
            }`}
            disabled={data?.is_finished == "yes"}
          >
            {data?.is_finished == "yes" ? "لم يقم العميل بالانهاء" : "انهاء"}
          </Button>
        </div>
        <div className="mt-10">
          <span className="inline-block text-gray">السعر:</span>
          <span className=" inline-block pr-3 text-primary-color">
            {data?.price}
            <span className=" text-gray"> لكل {data?.type_of_pricing}</span>
          </span>
        </div>
        <div className="my-5 grid w-fit grid-cols-[auto_auto] items-center gap-5">
          {data?.start_date && (
            <>
              <span className="text-gray">تاريخ البدأ</span>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                disabled
                value={new Date().toISOString().split("T")[0]}
                className="!cursor-default appearance-none rounded-lg bg-secondary-background px-4 py-2 text-medium text-opacity-100 !opacity-100"
              />
            </>
          )}
          {data?.end_date && (
            <>
              <span className="text-gray">تاريخ الانتهاء</span>
              <input
                type="date"
                disabled
                placeholder="dd-mm-yyyy"
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
          {data?.images?.map((img, i) => (
            <div key={i} className="w-32 min-w-32">
              <figure className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-primary-background bg-[url('/defaultImg.png')] bg-center bg-no-repeat text-text-color">
                <img
                  src={`${img.image}`}
                  alt=""
                  className=" h-full w-full object-cover object-center"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
