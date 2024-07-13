import { createContext, useState } from "react";
import { Grid } from "react-loader-spinner";

export const ProductContext = createContext();
export const UserContext = createContext();

function CustomProductProvider(props) {
  const [productList, setProductList] = useState(["Ashu"]);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ isUserLoggedIn, setUserLoggedIn }}>
        <ProductContext.Provider value={{ productList, setProductList }}>
          {productList.length ? (
            props.children
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
        </ProductContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default CustomProductProvider;
