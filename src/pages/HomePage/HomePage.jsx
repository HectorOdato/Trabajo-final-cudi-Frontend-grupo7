import CategoriesList from "../HomePage/components/CategoriesList.jsx";
import Carousel from "../HomePage/components/Carousel.jsx"

const imagescarousel = [
  "../src/assets/images/carousel1.jpg",
  "../src/assets/images/carousel2.png",
  "../src/assets/images/carousel3.webp",
  "../src/assets/images/carousel4.webp",]

const HomePage = () => {
  return ( <><Carousel images={imagescarousel}/>
    <CategoriesList/></>
  );
};

export default HomePage;
