import ReviewsClient from "@/components/ClientReviews";
import FooterOFHomePage from "@/components/FooterOFHomePage";
import Landing from "@/components/Landing";
import Ourservice from "@/components/Ourservice";
import Service from "@/components/Service";
import TopRatedCrafts from "@/components/TopRatedCrafts";

const Hero = () => {
  return (
    <div className="relative bg-white text-black">
      <main>
        <Landing />
        <Service />
        <Ourservice />
        <TopRatedCrafts />
        <ReviewsClient />
      </main>
      <FooterOFHomePage />
    </div>
  );
};

export default Hero;
