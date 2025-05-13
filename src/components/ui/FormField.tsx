import { FormFieldProps } from "@type/components";

const FormField = ({
  inputId,
  labelText,
  name,
  register,
  type,
  error,
  valueAsNumber
}: FormFieldProps) => {
  return (
    <>
      <div className="w-full h-12 relative flex rounded-xl">
        <input
          required
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl border-2 border-[#4070f4] focus:shadow-md"
          id={inputId}
          type={type}
          {...register(name, { valueAsNumber })}
        />
        <label
          className="absolute top-1/2 bg-white translate-y-[-50%] font-medium left-4 px-1 peer-focus:top-0 peer-focus:left-3  peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150 text-sm text-gray-500"
          htmlFor={inputId}
        >
          {labelText}
        </label>
      </div>
      {error && <span className="text-red-500 font-medium">{error.message}</span>}
    </>
  );
};

export default FormField;
