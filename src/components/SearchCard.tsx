import ProfilePic from "./ProfilePic";

import Link from "next/link";
import HandymanIcon from "./../assets/icons-jsx/HandymanIcon";
import CalendarIcon from "./../assets/icons-jsx/CalendarIcon";
import StaticRatingStars from "./StaticRatingStars";
import StarIcon from "./../assets/icons-jsx/StarIcon";
import CheckIcon from "./../assets/icons-jsx/CheckIcon";
import SandOfTime from "./../assets/icons-jsx/SandOfTime";
interface Handyman {
  id: number;
  name: string;
  image: string | null;
  created_at: string | Date;
  description: string;
  average_rating: number | null;
  number_of_ratings: number;
  done_jobs_num: number;
  active_jobs_num: number;
  search_images: {
    image: string;
  }[];
  craft: {
    name: string;
  };
}

interface Props {
  handyman: Handyman;
}

export default function SearchCard({ handyman }: Props) {
  return (
    <div className="cursor-pointer rounded-xl  p-6 mx-6 shadow-md dark:shadow-lg text-right bg-[#292D35]">
      {/* Header */}
      <div className="flex flex-row-reverse items-center gap-4">
        <Link href={"/"}>
          {" "}
          <ProfilePic size="md" src={handyman.image ? handyman.image : null} />
        </Link>

        <div className="space-y-1">
          <Link href={"/"}>
            {" "}
            <p className="text-base font-semibold">{handyman.name}</p>
          </Link>
          <div className="flex flex-row-reverse items-center gap-2 text-sm text-gray-400">
            <HandymanIcon size={15} />
            <p>{handyman.craft.name}</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-row-reverse gap-3 overflow-x-auto py-5 text-nowrap">
        <div className="flex flex-row-reverse items-center gap-2 rounded-full border border-text-color/20 px-4 py-1.5 text-sm shadow-sm">
          <CalendarIcon />
          <span>منضم منذ 3 شهور</span>
        </div>

        <div className="flex flex-row-reverse items-center gap-2 rounded-full border border-text-color/20 px-4 py-1.5 text-sm shadow-sm">
          {handyman.average_rating ? (
            <>
              <StaticRatingStars
                ratingPercentage={handyman.average_rating / 5}
                size={13}
              />
              <span className="text-sm text-gray-300">
                ({handyman.number_of_ratings})
              </span>
            </>
          ) : (
            <>
              <StarIcon />
              <span>لايوجد تقييم</span>
            </>
          )}
        </div>

        <div className="flex flex-row-reverse items-center gap-2 rounded-full border border-text-color/20 px-4 py-1.5 text-sm shadow-sm">
          <CheckIcon size={15} />
          <span>{handyman.done_jobs_num} مهام مكتملة</span>
        </div>

        <div className="flex flex-row-reverse items-center gap-2 rounded-full border border-text-color/20 px-4 py-1.5 text-sm shadow-sm">
          <SandOfTime size={15} />
          <span>{handyman.active_jobs_num} مهام نشطة</span>
        </div>
      </div>

      {/* Description */}
      {handyman.description && (
        <p className="pt-2 text-sm leading-relaxed text-gray-300">
          {handyman.description}
        </p>
      )}

      {/* Work Images */}
      <div className="mt-4 flex flex-row-reverse gap-3 overflow-x-auto">
        {handyman.search_images.map((img, i) => (
          <div key={i} className="w-32 min-w-32">
            <figure className="aspect-[1/1] w-full overflow-hidden rounded-lg bg-primary-background">
              <img
                src={img.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
