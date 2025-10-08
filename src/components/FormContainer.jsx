import TitleForm from '../components/TitleForm'
import FormField from '../components/FormField'

const FormContainer = ({ title, fields, onSubmit, submitLabel = 'Enviar', loading = false }) => {
  return (
    <div className="lex flex-col items-center justify-center py-15 sm:px-6 lg:px-10">
      <TitleForm title={title} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-25">
          <form onSubmit={onSubmit} className="space-y-10">
            {fields.map((field) => (
              <FormField key={field.name} {...field} />
            ))}

            <button type="submit" disabled={loading} className={`w-full flex justify-center border rounded-md ${loading ? "bg-red-500 cursor-not-allowed" : "bg-red-800 hover:bg-red-600"} py-2 px-4 text-sm font-medium text-white border-0`}>
              {loading ? "Cargando..." : submitLabel}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormContainer
