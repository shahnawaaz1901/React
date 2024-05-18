import styles from "./password.module.css";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
function InputPassword({ name, placeholder }) {
  const [passwordVisible, setPasswordVisiblity] = useState(false);
  const { register } = useFormContext();
  return (
    <>
      <div className={styles.passwordContainer}>
        <input
          type={passwordVisible ? "text" : "password"}
          name={name}
          {...register(name)}
          placeholder={placeholder}
        />
        <IconContext.Provider value={{ style: { color: "#7064e5" } }}>
          <span
            className={styles.visibleIconContainer}
            onClick={() => setPasswordVisiblity(!passwordVisible)}
          >
            {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default InputPassword;
