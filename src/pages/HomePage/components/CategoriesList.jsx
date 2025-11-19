import { useEffect, useState } from "react";
import { getAllCategories } from "../../../components/services/CategoryService";
import CategoryItem from "../../../components/CategoryItem"


const CategoryList = () => {
const [categories, setCategories] = useState([]);


useEffect(() => {
  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
    console.error("error al mostrar categorias", error);
}
};

fetchCategories();
}, []);


return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(category => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default CategoryList;
