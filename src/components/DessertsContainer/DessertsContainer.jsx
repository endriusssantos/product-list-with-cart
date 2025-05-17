import React from "react";
import DessertItem from "../DessertItem/DessertItem";
import data from "../../data/data.json";

const DessertsContainer = () => {
  return (
    <div className="mx-auto lg:mx-0">
      <h1 className="text-3xl font-bold text-rose-900">Desserts</h1>
      <div className="grid grid-cols-1 gap-5 py-5 lg:grid-cols-3">
        {data.map((item, index) => (
          <DessertItem key={index} dessert={item} />
        ))}
      </div>
    </div>
  );
};

export default DessertsContainer;
