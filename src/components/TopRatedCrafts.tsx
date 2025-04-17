import Image from "next/image";
import Link from "next/link";

async function TopRatedCrafts() {
  const response = await fetch("http://20.199.86.3/api/home", {
    method: "POST",
  });
  const topRatedCrafts = await response.json();
  const top_craftsmen: Craftsman[] = topRatedCrafts.top_craftsmen;

  console.log(top_craftsmen);
  return (
    <section className="bg-[#FEF1F3] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-[50px]">
          أفضل الحرفيين
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {top_craftsmen?.map((item: Craftsman) => (
            <Link key={item.id} href={"/"}>
              <div className="bg-white border border-red-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full border-4 border-red-100 shadow-md hover:scale-105 transition-transform duration-300"
                    src={item.image}
                    alt={`${item.name} photo`}
                    width={100}
                    height={100}
                  />
                  <h3 className="mt-5 text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {item.craft_name[0].name}
                  </p>

                  <div className="flex items-center justify-center mt-3 space-x-1">
                    {Array.from({ length: 5 }, (_, index) =>
                      index < item.average_rating ? (
                        <span key={index} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ) : (
                        <span key={index} className="text-gray-300 text-lg">
                          ☆
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopRatedCrafts;
