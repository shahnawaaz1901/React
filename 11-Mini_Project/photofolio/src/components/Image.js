//* Packages
import Swal from "sweetalert2";
import { doc, deleteDoc } from "firebase/firestore";
import { MdDelete } from "react-icons/md";

//* Internal Modules
import styles from "./image.module.css";
import db from "../firebase.config";
export default function Image(props) {
  const {
    title,
    imageURL,
    updateCurrentImage,
    id,
    imageCategory,
    notify,
    updateImage,
    setFormVisiblity,
  } = props;

  //* When a user Type Wrong Image URL then Instead of Not Render, Render a Error Image
  function handleRenderError(e) {
    e.target.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/159/159469.png"
    );
  }

  //* Delete Image By Id
  function deleteImage(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(doc(db, imageCategory, id));
        setFormVisiblity(false);
        notify("Image Deleted Successfully !!", "delete");
      }
    });
  }

  return (
    <>
      <div
        className={styles.imageContainer}
        onClick={(e) => updateCurrentImage({ e, imageURL })}
      >
        <div className={styles.image}>
          <img src={imageURL} alt="Img" onError={handleRenderError} />
        </div>
        <div className={styles.operations}>
          <div
            className={styles.updateBtn}
            onClick={(e) => updateImage({ id, title, imageURL })}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/14026/14026269.png"
              alt="update-btn"
            />
          </div>
          <div className={styles.deleteBtn} onClick={(e) => deleteImage(id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
              alt="delete-btn"
            />
          </div>
        </div>
        <div className={styles.imageTitle}>{title}</div>
      </div>
    </>
  );
}
