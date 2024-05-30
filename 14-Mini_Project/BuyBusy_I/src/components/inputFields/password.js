import styles from "./password.module.css";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
function InputPassword({ name, placeholder, formReg, errors }) {
  /*
    If we Directly use the errors from useForm() instead of useFormContext() then our validations not working properly
    const {
      formState: { errors },
    } = useForm();
  */
  // const {
  //   formState: { errors },
  // } = useFormContext();

  const [passwordVisible, setPasswordVisiblity] = useState(false);
  return (
    <>
      <div className={styles.passwordContainer}>
        <input
          type={passwordVisible ? "text" : "password"}
          name={name}
          {...formReg}
          placeholder={placeholder}
        />
        <span
          className={styles.visibleIconContainer}
          style={{ top: errors[name] ? 21 + "%" : 24.3 + "%" }}
          onClick={() => setPasswordVisiblity(!passwordVisible)}
        >
          {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
        {errors[name] && (
          <div className={styles.errors}>{errors[name].message}</div>
        )}
      </div>
    </>
  );
}

export default InputPassword;
