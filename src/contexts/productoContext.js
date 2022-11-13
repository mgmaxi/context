import React, { createContext, useContext, useState } from 'react';

export const ProductoContext = createContext();

export function ProductoContextProvider(props) {
  const [producto, setproducto] = useState({ id: 1, name: 'yerba' });

  const valor = { producto, setproducto };

  return (
    <ProductoContext.Provider value={valor}>
      {props.children}
    </ProductoContext.Provider>
  );
}

export function useProductoContext() {
  const context = useContext(ProductoContext);
  return context;
}
