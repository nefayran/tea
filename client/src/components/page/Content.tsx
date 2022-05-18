import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import Cart from '@/pages/Cart';

export default function Content() {
  return (
    <div className="content-wrapper px-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
