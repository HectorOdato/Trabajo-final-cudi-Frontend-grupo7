import CategoriesList from "./components/CategoriesList";

const HomePage = () => {
  return ( <>
  <div className="flex items-center justify-center ">
  <img
    src="./images/set-mockup-realistic-devices-smartphonepng.png"
    alt="imagenbanner"
    className="w-1/2 h-auto  mb-4 mt-10"
  />
</div>

  <CategoriesList /></>
  );
};

export default HomePage;
