//* Packages
import ClipLoader from "react-spinners/ClipLoader";

//* Internal Modules
import styles from "./loader.module.css";

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
