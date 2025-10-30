import CategoryItem from './CategoryItem';

const CategoriesList = () => {
  const categories = [
    {
      href: 'computadora',
      name: "Computadoras",
      imageURL: '/images/pcbanner.webp',
    },
    {
      href: 'notebook',
      name: "Notebook",
      imageURL: '/images/notebookbanner.webp',
    },
    {
      href: 'celulares',
      name: 'Celulares',
      imageURL: '/images/celularbanner.webp',
    },
    {
      href: 'televisores',
      name: 'Televisores',
      imageURL: '/images/tvbanner.webp',
    },
  ];

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

export default CategoriesList;
