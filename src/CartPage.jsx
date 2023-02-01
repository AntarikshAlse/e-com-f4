import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Title from "./components/Title";
//use state to store the products
import { useSelector, useDispatch } from "react-redux";
const CartPage = () => {
  const [products, setProducts] = useState([]);
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Title title={"My Cart"} />
      <div className=" w-full  mt-4 p-3">
        <div className="flex flex-wrap px-3 w-full bg-white text-black justify-between">
          {items &&
            items.map((product) => (
              <ProductCard
                key={product.id}
                src={product.src}
                id={product.id}
                title={product.title}
                price={product.price}
                fromCart={true}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;
