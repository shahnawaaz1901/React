import styles from "./loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  const overRiden = {
    margin: "0 auto",
    borderWidth: "8px",
  };
  return (
    <>
      <div className={styles.loaderContainer}>
        <ClipLoader
          color="rgb(160, 160, 249)"
          loading={true}
          size={40}
          cssOverride={overRiden}
        />
      </div>
    </>
  );
}
