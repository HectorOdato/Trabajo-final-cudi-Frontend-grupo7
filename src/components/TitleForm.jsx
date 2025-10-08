const TitleForm = ({ title }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-4xl font-bold text-center mb-6 text-red-500">
        {title}
      </h2>
    </div>
  );
}

export default TitleForm
