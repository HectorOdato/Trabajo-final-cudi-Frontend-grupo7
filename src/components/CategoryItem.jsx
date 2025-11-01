import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div className="group flex flex-col items-center justify-between category-item rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out w-[280px] h-[360px]">
      <Link to={`${category.Link}`} className="flex flex-col items-center justify-between w-full h-full">
        <div className="flex items-center justify-center flex-grow">
          <img
            src={category.imageURL}
            alt={category.name}
            className="object-contain w-48 h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="w-full text-center mt-4">
          <h3 className="text-lg font-bold uppercase tracking-wide">
            {category.name}
          </h3>

          <div className="flex justify-center mt-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full transition arrow-container">
              <span className="text-xl arrow-icon">→</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
