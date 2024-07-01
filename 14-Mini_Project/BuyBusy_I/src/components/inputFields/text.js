function InputText({ name, placeholder, formReg, errors, autoFocus }) {
  //* Get errors from formState for Rendering Error on user End or directly Get By Props

  // const {
  //   formState: { errors },
  // } = useFormContext();

  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        {...formReg}
        autoFocus={autoFocus}
      />
      {errors[name] && <div className="errors">{errors[name].message}</div>}
    </>
  );
}

export default InputText;
