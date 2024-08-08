import { useProductValue } from "../../hooks/productValue";
import Filter from "../../components/filter/Filter";
import Product from "../product/Product";
import styles from "./mainContainer.module.css";
import useFilterValue from "../../hooks/filterValue";

function MainContainer() {
  const { productList } = useProductValue();
  const { filterData } = useFilterValue();

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

  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.productListContainer}>
        {filter(productList, filterData).map((value, index) => (
          <Product
            key={index}
            title={value.title}
            imageURL={value.imageURL}
            about={value.about}
            price={value.price}
            id={value.id}
          />
        ))}
      </div>
    </div>
  );
}
export default MainContainer;
