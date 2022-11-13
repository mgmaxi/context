import React from 'react';
import { useProductoContext } from '../contexts/productoContext';

const ListadoProductos = () => {
  const { producto } = useProductoContext();
  console.log(producto);
  return (
    <div>
      <h1>Producto</h1>
      <p>{producto.name}</p>
    </div>
  );
};

export default ListadoProductos;
