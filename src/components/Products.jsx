import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
//use state to store the products
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../redux/cartSlice";
import { persistor } from "../redux/store";
import Title from "./Title";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { items, totalPrice, duplicateItems } = useSelector(
    (state) => state.cart
  );
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
  const handleCheckout = () => {
    persistor.purge();
    dispatch(checkout());
    alert("Checked Out");
  };
  return (
    <>
      <Title title={"Products"} />
      <div className="flex w-full flex-wrap mt-4 p-3">
        <div className="flex flex-wrap px-3 w-3/4 bg-white text-black justify-between">
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
        <div className="divider divider-horizontal"></div>
        <div className="relative">
          <div className="px-6 py-3 bg-base-100 sticky top-0">
            <p className="text-center ">Checkout</p>
            <br />
            <ul>
              {items &&
                items.map((item) => (
                  <li className="flex justify-between" key={item.id}>
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
            </ul>
            <br />
            <hr />
            <h5 className="my-2">Total : {totalPrice}</h5>
            <hr />
            <br />
            <button
              className="btn bg-white text-black hover:bg-green-400"
              onClick={handleCheckout}
            >
              <span>Click to Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
