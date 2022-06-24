import { createContext, useState } from "react";

export const ShoesContext = createContext([]);

const ShoesContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  return (
    <ShoesContext.Provider value={{ shoes, setShoes }}>
      {children}
    </ShoesContext.Provider>
  );
};
export default ShoesContextProvider;
