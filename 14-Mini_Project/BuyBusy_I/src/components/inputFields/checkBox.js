import { useFormContext } from "react-hook-form";
function InputCheckBox({ name, id }) {
  const { register } = useFormContext();
  return (
    <>
      <input type="checkbox" name={name} {...register(id)} id={id} />
    </>
  );
}

export default InputCheckBox;
