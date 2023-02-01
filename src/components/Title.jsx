import React from "react";

const Title = ({ title }) => {
  return (
    <div className="h-20  px-6 flex justify-center align-middle bg-white text-black  place-items-center">
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};

export default Title;
