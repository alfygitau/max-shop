import { createContext, useState } from "react";

export const PhonesContext = createContext([]);

const PhonesContextProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  return (
    <PhonesContext.Provider value={{ phones, setPhones }}>
      {children}
    </PhonesContext.Provider>
  );
};
export default PhonesContextProvider;
