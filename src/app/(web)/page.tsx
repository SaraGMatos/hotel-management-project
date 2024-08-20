import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <PageSearch />
      {/* Featured room  */}
      <Gallery />
      {/* News Letter */}
    </>
  );
};

export default Home;
