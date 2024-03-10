'use client';

import { testNavbarAtom } from '../components/Navbar';
import ProductList from '../components/PLP/ProductList';
import { useAtom } from 'jotai';

export default function Products() {
  return (
    <>
      <h1 className="text-xl text-center font-extrabold">All Products</h1>
      <ProductList />
    </>
  );
}
