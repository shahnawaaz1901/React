import Filter from "../../components/filter/Filter";
import Product from "../product/Product";
import styles from "./mainContainer.module.css";
import useFilterValue from "../../hooks/filterValue";
import useSearchValue from "../../hooks/searchValue";
import { useEffect, useState } from "react";
import { useDatabaseOperations } from "../../hooks/operations";
import { Grid } from "react-loader-spinner";
import useLocalStorageForUser from "../../hooks/localstorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../config/firebase";

function MainContainer() {
  const [productList, setProductList] = useState([]);
  const { getData } = useDatabaseOperations();
  const { filterData } = useFilterValue();
  const { searchData } = useSearchValue();
  const { addData } = useDatabaseOperations();
  const { getUser } = useLocalStorageForUser();
  const navigate = useNavigate();

  function filterByCategory(filter, data, filterOutput) {
    data.forEach((product) => {
      if (product.category === filter) {
        filterOutput.push(product);
      }
    });
  }

  function filter(products, filterData) {
    let data =
      filterData.PriceRange >= 0
        ? products.filter(
            (product) => Number(product.price) < Number(filterData.PriceRange)
          )
        : products;

    let filteredByCategory = false;
    let filterCategoryData = [];
    for (let filter in filterData) {
      if (filter !== "PriceRange" && filterData[filter]) {
        filteredByCategory = true;
        filterByCategory(filter, data, filterCategoryData);
      }
    }

    if (!filteredByCategory) {
      return data;
    }
    return filterCategoryData;
  }

  async function fetchProducts() {
    const data = await getData("productList");
    setProductList(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function addedToCart(product) {
    try {
      if (!getUser()) {
        navigate("/users/signin");
        return;
      }
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
    }
  }
  return (
    <>
      {productList.length ? (
        <div className={styles.mainContainer}>
          <Filter />
          <div className={styles.productListContainer}>
            {filter(productList, filterData)
              .filter(
                (product) =>
                  product.title.includes(searchData) ||
                  product.about.includes(searchData)
              )
              .map((value, index) => (
                <Product
                  key={index}
                  productDetail={value}
                  addedToCart={addedToCart}
                />
              ))}
          </div>
        </div>
      ) : (
        <Grid
          visible={true}
          height="60"
          width="60"
          color="#7064e5"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{
            display: "flex",
            height: 60 + "vh",
            width: 100 + "vw",
            justifyContent: "center",
            alignItems: "center",
          }}
          wrapperClass="grid-wrapper"
        />
      )}
    </>
  );
}
export default MainContainer;
