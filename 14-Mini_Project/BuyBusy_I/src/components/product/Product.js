import { useState } from "react";
import styles from "./product.module.css";
import { useDatabaseOperations } from "../../hooks/operations";
import useLocalStorageForUser from "../../hooks/localstorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../config/firebase";

function Product({ title, imageURL, about, price, id }) {
  const [cartBtnValue, setCartBtnValue] = useState("Add to Cart");
  const { addData } = useDatabaseOperations();
  const { getUser } = useLocalStorageForUser();
  const navigate = useNavigate();

  async function handleCartBtnClick(product) {
    try {
      if (!getUser()) {
        navigate("/users/signin");
        return;
      }
      setCartBtnValue("Adding...");
      const itemQuery = query(
        collection(db, "cart"),
        where("user", "==", `${getUser()}`),
        where("productId", "==", product.productId)
      );
      const itemPresent = await getDocs(itemQuery);
      if (!itemPresent.size) {
        await addData("cart", {
          ...product,
          user: getUser(),
          qty: 1,
        });
      }
      toast.success("Item added to Cart");
    } catch (error) {
      toast.error("Something went wrong !!");
    } finally {
      setCartBtnValue("Add to Cart");
    }
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageContainer}>
        <img src={`${imageURL}`} alt="Product Img" />
      </div>
      <div className={styles.aboutProduct}>
        <div className={styles.name}>{title}</div>
        <div className={styles.about}>{about}</div>
      </div>
      <div className={styles.productPrice}>Price : &nbsp; &#x20B9; {price}</div>
      <div
        className={styles.productCartBtn}
        onClick={() =>
          handleCartBtnClick({ productId: id, title, imageURL, price, about })
        }
      >
        {cartBtnValue}
      </div>
    </div>
  );
}

export default Product;
