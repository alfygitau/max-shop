import { createContext, useState } from "react";

export const StoresContext = createContext([]);

const StoresContextProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  return (
    <StoresContext.Provider value={{ stores, setStores }}>
      {children}
    </StoresContext.Provider>
  );
};
export default StoresContextProvider;
