import { useFormContext } from "react-hook-form";
function InputText({ name, placeholder }) {
  const { register } = useFormContext();
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
    </>
  );
}

export default InputText;
