import { createContext, useState } from "react";

export const ProductsListContext = createContext([]);

const ProductsListContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductsListContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsListContext.Provider>
  );
};

export default ProductsListContextProvider;
