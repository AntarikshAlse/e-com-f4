import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/cartSlice";
const ProductCard = ({ src, title, price, id, fromCart }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (fromCart) dispatch(remove({ id, price }));
    else dispatch(add({ price, id, title, src }));
  };
  return (
    <div className="card border w-72 m-4">
      <figure>
        <img src={src} className="h-48 object-cover" alt="Product" />
      </figure>
      <div className="card-body px-2">
        <span>Title : {title}</span>
        <span>Price : {price}</span>
        <button
          className="btn bg-white text-black hover:bg-green-500"
          onClick={handleClick}
        >
          {fromCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
