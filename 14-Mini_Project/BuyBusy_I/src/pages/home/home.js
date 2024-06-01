import MainContainer from "../../components/mainContainer/MainContainer";
import SearchBar from "../../components/searchBar/SearchBar";
// import { useProductValue } from "../../hooks/productValue";

function Home() {
  // const { productList, setProductList } = useProductValue();

  return (
    <>
      <SearchBar />
      <MainContainer />
    </>
  );
}
export default Home;
