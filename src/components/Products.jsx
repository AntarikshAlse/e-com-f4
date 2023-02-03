import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
//use state to store the products
import { useSelector, useDispatch } from "react-redux";
import Title from "./Title";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { duplicateItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchProducts() {
      const data = await fetch("https://dummyjson.com/products");
      const { products } = await data.json();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (duplicateItems) {
      alert("You have already added this product!");
    }
  }, [duplicateItems]);
  return (
    <>
      <Title title={"Products"} />
      <div className="w-11/12 mt-4 p-3">
        <div className="flex flex-wrap px-3 w-full bg-white text-black">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                src={product.images[0]}
                id={product.id}
                title={product.title}
                price={product.price}
                fromCart={false}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
