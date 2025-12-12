import HeroBanner from "../components/HeroBanner/HeroBanner";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import NewProducts from "../components/NewProducts/NewProducts";
import Recommended from "../components/Recommended/Recommended";
import PromoBanners from "../components/PromoBanners/PromoBanners";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <NewProducts />
      <Recommended />
      <PromoBanners />
    </>
  );
};

export default HomePage;
