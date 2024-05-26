import { useFormContext } from "react-hook-form";
function InputText({ name, placeholder, formReg }) {
  //* Get errors from formState for Rendering Error on user End

  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input type="text" name={name} placeholder={placeholder} {...formReg} />
      {errors[name] && <div className="errors">{errors[name].message}</div>}
    </>
  );
}

export default InputText;
