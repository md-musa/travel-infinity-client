import { createContext, useState } from 'react';

export const Store = createContext();

function StoreProvider({ children }) {
  const [store, setStore] = useState({
    selectionDetails: null,
    user: null,
  });

  return <Store.Provider value={[store, setStore]}>{children}</Store.Provider>;
}

export default StoreProvider;
