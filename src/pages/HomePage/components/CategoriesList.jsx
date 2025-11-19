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
  <div className="flex flex-wrap gap-6 justify-center">
    {categories.map((category) => (
      <CategoryItem key={category._id} category={category} />
    )
  )
}
</div>
);
};


export default CategoryList;
