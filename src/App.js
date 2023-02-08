import React from "react";
import Nav from "./Nav";
import "./App.css";
import Home from "./components/Home";
import products from "./components/products.json";

export default function App() {
  const unique_category = new Set();
  products?.map((product) => {
    unique_category.add(product.category);
  });

  return (
    <div>
      <Nav />
      <Home data={products} category={unique_category} />
    </div>
  );
}
