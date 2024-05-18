import styles from "./range.module.css";
import { useFormContext } from "react-hook-form";
function InputRange({ name, price, min, max, step }) {
  const { register } = useFormContext();
  return (
    <>
      <input
        type="range"
        height="5"
        min={min}
        max={max}
        step={step}
        className={styles.filterRangeInput}
        defaultValue={price}
        {...register(name)}
        id={name}
      />
    </>
  );
}
export default InputRange;
