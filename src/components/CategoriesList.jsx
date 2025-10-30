import CategoryItem from './CategoryItem';

const CategoriesList = () => {
  const categories = [
    {
      href: 'mens-clothing',
      name: "Computadoras",
      imageURL: '/images/pcbanner.webp',
    },
    {
      href: 'womens-clothing',
      name: "Notebooks",
      imageURL: '/images/notebookbanner.webp',
    },
    {
      href: 'jewelery',
      name: 'Celulares',
      imageURL: '/images/celularbanner.webp',
    },
    {
      href: 'electronics',
      name: 'Televisores',
      imageURL: '/images/tvbanner.webp',
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-red-500 sm:text-5xl md:text-6xl lg:text-7xl mb-15 text-center">
          Explora nuestras categorías
        </h1>
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
