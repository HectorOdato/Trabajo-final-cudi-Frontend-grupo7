import CategoriesList from "../HomePage/components/CategoriesList.jsx";
import Carousel from "../HomePage/components/Carousel.jsx"

const imagescarousel = [
  "https://res.cloudinary.com/deijzj2mb/image/upload/v1763993483/carousel1_bdotnw.webp",
  "https://res.cloudinary.com/deijzj2mb/image/upload/v1763993483/carousel2_ylx8rn.png",
  "https://res.cloudinary.com/deijzj2mb/image/upload/v1763993483/carousel3_ibuxeh.webp",
  "https://res.cloudinary.com/deijzj2mb/image/upload/v1763993483/carousel4_sviypw.webp",]

const HomePage = () => {
  return ( <><Carousel images={imagescarousel}/>
    <CategoriesList/></>
  );
};

export default HomePage;
