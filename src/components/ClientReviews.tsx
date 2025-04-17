import React from "react";
import StaticRatingStars from "./StaticRatingStars";
import StarIcon from "@/assets/icons-jsx/StarIcon";
interface ClientReview {
  id: number;
  name: string;
  image: string;
  average_rating: number;
  description: string;
}

const fakeData: ClientReview[] = [
  {
    id: 1,
    name: "أحمد علي",
    image: "/avatars/client1.png",
    average_rating: 4.5,
    description: "خدمة ممتازة وسرعة في التنفيذ، أنصح بالتعامل معه بشدة!",
  },
  {
    id: 2,
    name: "منى حسن",
    image: "/avatars/client2.png",
    average_rating: 5,
    description: "شخص محترف جدًا وفاهم شغله، كانت تجربة رائعة.",
  },
  {
    id: 3,
    name: "سامي عبد الله",
    image: "/avatars/client3.png",
    average_rating: 3.8,
    description: "الخدمة جيدة عمومًا لكن محتاجة شوية تحسينات.",
  },
  {
    id: 4,
    name: "نجلاء يوسف",
    image: "/avatars/client4.png",
    average_rating: 4.9,
    description: "أسلوبه راقي جدًا والتزامه بالوقت ممتاز.",
  },
  {
    id: 5,
    name: "محمد كمال",
    image: "/avatars/client5.png",
    average_rating: 4.2,
    description: "شكراً على الخدمة الرائعة، أكيد هكرر التجربة.",
  },
];

function ReviewsClient() {
  return (
    <section className=" bg-white  m-auto pb-[50px]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-[50px]">
          أراء عملائنا{" "}
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="relative w-[300px] h-[300px] mx-auto">
            <img
              src="/Group 9 (1).png"
              alt="review"
              className="w-full h-full object-cover rounded-xl "
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-start mx-auto rounded-xl  gap-2 w-[60%]">
              <img
                src="/Image-Container.png"
                alt=""
                className="w-[80] h-[80] rounded-full border-4 border-red-100 shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h4>{fakeData[2].name}</h4>
              {fakeData[2].average_rating ? (
                <>
                  <StaticRatingStars
                    ratingPercentage={fakeData[1].average_rating / 5}
                    size={13}
                  />
                </>
              ) : (
                <>
                  <StarIcon />
                  <span>لايوجد تقييم</span>
                </>
              )}

              <p>{fakeData[2].description}</p>
            </div>
          </div>
          <div className="relative w-[350px] h-[350px] mx-auto">
            <img
              src="/Group 10.png"
              alt="review"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-start mx-auto rounded-xl  gap-2 w-[60%]">
              <img
                src="/Image-Container.png"
                alt=""
                className="w-[80] h-[80] rounded-full border-4 border-red-100 shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h4>{fakeData[1].name}</h4>
              {fakeData[1].average_rating ? (
                <>
                  <StaticRatingStars
                    ratingPercentage={fakeData[1].average_rating / 5}
                    size={13}
                  />
                </>
              ) : (
                <>
                  <StarIcon />
                  <span>لايوجد تقييم</span>
                </>
              )}

              <p>{fakeData[1].description}</p>
            </div>
          </div>

          <div className="relative w-[300px] h-[300px] mx-auto">
            <img
              src="/Group 9 (1).png"
              alt="review"
              className="w-full h-full object-cover rounded-xl transform scale-x-[-1]"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-start mx-auto rounded-xl  gap-2 w-[60%]">
              <img
                src="/Image-Container.png"
                alt=""
                className="w-[80] h-[80] rounded-full border-4 border-red-100 shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h4>{fakeData[0].name}</h4>
              {fakeData[0].average_rating ? (
                <>
                  <StaticRatingStars
                    ratingPercentage={fakeData[2].average_rating / 5}
                    size={13}
                  />
                </>
              ) : (
                <>
                  <StarIcon />
                  <span>لايوجد تقييم</span>
                </>
              )}

              <p>{fakeData[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsClient;
