import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* Featured room  */}
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
