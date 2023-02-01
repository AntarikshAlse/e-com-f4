import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="navbar bg-base-100 p-3">
      <div className="flex-1">
        <a className="text-white no-underline font-medium normal-case text-xl">
          E-Commerce
        </a>
      </div>
      <div className="navbar-end">
        <div className="indicator ">
          <Link className="ml-2 link text-white no-underline" to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {items?.length || 0}
            </span>
          </Link>
        </div>
        <div className="mx-2 indicator">
          <Link className="link text-white no-underline" to="/">
            <svg
              fill="#fff"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              viewBox="-49.54 -49.54 594.48 594.48"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="-49.54"
                  y="-49.54"
                  width="594.48"
                  height="594.48"
                  rx="297.24"
                  fill="#27353a"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier" className="hover:bg-blue-700">
                <g>
                  <g>
                    <g>
                      <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>
                      <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
