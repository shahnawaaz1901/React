import styles from "./password.module.css";
import passwordVisibleIcon from "../../data/159604.png";
import passwordHiddenIcon from "../../data/9055153.png";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
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
        <span className={styles.visibleIconContainer}>
          <img
            src={passwordVisible ? passwordHiddenIcon : passwordVisibleIcon}
            alt="password visible"
            onClick={() => setPasswordVisiblity(!passwordVisible)}
          />
        </span>
      </div>
    </>
  );
}

export default InputPassword;
