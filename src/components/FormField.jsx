const FormField = ({ name, label, icon: Icon, value, onChange, type = "text", placeholder = "" }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="text-gray-300 mb-3 block font-medium text-sm"
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Icon className="h-5 text-gray-500 mx-2" />
          </div>
        )}
        <input
          id={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || label || `Ingrese su ${name}`}
          className="block w-full appearance-none rounded-md border border-red-900 px-10 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        />
      </div>
    </div>
  );
}

export default FormField
