import FillterAndSort from "@/components/FillterAndSort";
import SearchCard from "@/components/SearchCard";
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

const fakeData = [
  {
    id: 1,
    name: "محمود عامر",
    image: "/next.svg",
    created_at: "2024-01-01",
    description: "من خلال سنوات من الخبرة في عالم النجارة...",
    average_rating: 4.5,
    number_of_ratings: 14,
    done_jobs_num: 14,
    active_jobs_num: 2,
    search_images: [
      { image: "/window.svg" },
      { image: "/vercel.svg" },
      { image: "/next.svg" },
      { image: "/globe.svg" },
    ],
    craft: { name: "نجار" },
  },
  {
    id: 2,
    name: "أحمد صالح",
    image: null,
    created_at: "2024-01-01",
    description: "نجار متخصص في الأبواب والأثاث المنزلي...",
    average_rating: 3.8,
    number_of_ratings: 2,
    done_jobs_num: 2,
    active_jobs_num: 0,
    search_images: [{ image: "/window.svg" }, { image: "/vercel.svg" }],
    craft: { name: "نجار" },
  },
  {
    id: 1,
    name: "محمود عامر",
    image: "/next.svg",
    created_at: "2024-01-01",
    description: "من خلال سنوات من الخبرة في عالم النجارة...",
    average_rating: 4.5,
    number_of_ratings: 14,
    done_jobs_num: 14,
    active_jobs_num: 2,
    search_images: [
      { image: "/window.svg" },
      { image: "/vercel.svg" },
      { image: "/next.svg" },
      { image: "/globe.svg" },
    ],
    craft: { name: "نجار" },
  },
  {
    id: 2,
    name: "أحمد صالح",
    image: null,
    created_at: "2024-01-01",
    description: "نجار متخصص في الأبواب والأثاث المنزلي...",
    average_rating: 3.8,
    number_of_ratings: 2,
    done_jobs_num: 2,
    active_jobs_num: 0,
    search_images: [{ image: "/window.svg" }, { image: "/vercel.svg" }],
    craft: { name: "نجار" },
  },
  {
    id: 1,
    name: "محمود عامر",
    image: "/next.svg",
    created_at: "2024-01-01",
    description: "من خلال سنوات من الخبرة في عالم النجارة...",
    average_rating: 4.5,
    number_of_ratings: 14,
    done_jobs_num: 14,
    active_jobs_num: 2,
    search_images: [
      { image: "/window.svg" },
      { image: "/vercel.svg" },
      { image: "/next.svg" },
      { image: "/globe.svg" },
    ],
    craft: { name: "نجار" },
  },
  {
    id: 2,
    name: "أحمد صالح",
    image: null,
    created_at: "2024-01-01",
    description: "نجار متخصص في الأبواب والأثاث المنزلي...",
    average_rating: 3.8,
    number_of_ratings: 2,
    done_jobs_num: 2,
    active_jobs_num: 0,
    search_images: [{ image: "/window.svg" }, { image: "/vercel.svg" }],
    craft: { name: "نجار" },
  },
];
export default function SearchPage() {
  return (
    <section className="bg-[#1F1F28]">
      <div className="container flex flex-col-reverse lg:grid gap-x-6 gap-y-8 lg:grid-cols-[1fr_250px] items-start p-[50px] ">
        <section className="w-full space-y-5 overflow-x-hidden md:space-y-10">
          {fakeData ? (
            fakeData.map((handyman: Handyman, i) => (
              <div key={i}>
                <SearchCard handyman={handyman} />
              </div>
            ))
          ) : (
            <p className="text-white">لا يوجد نتائج</p>
          )}
        </section>

        <FillterAndSort />
      </div>
    </section>
  );
}
