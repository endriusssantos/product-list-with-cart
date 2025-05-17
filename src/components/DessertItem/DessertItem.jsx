import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const DessertItem = ({ dessert }) => {
  const { cartItems, addToCart, incrementItem, decrementItem } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const foundItem = cartItems.find((item) => item.id === dessert.id);
    setQuantity(foundItem ? foundItem.quantity : 0);
  }, [cartItems, dessert.id]);

  const handleAddToCart = () => {
    addToCart(dessert);
  };

  const handleIncrement = () => {
    incrementItem(dessert.id);
  };

  const handleDecrement = () => {
    decrementItem(dessert.id);
  };

  return (
    <div className="relative">
      <img
        src={dessert.image.desktop}
        alt={dessert.name}
        className={`w-50 rounded-lg ${quantity > 0 ? "border-red border-2" : ""}`}
      />
      <p className="pt-9 text-sm font-medium text-rose-500">
        {dessert.category}
      </p>
      <h3 className="font-semibold text-rose-900">{dessert.name}</h3>
      <p className="text-red font-semibold">${dessert.price.toFixed(2)}</p>

      <div className="absolute bottom-21 left-7 w-[140px]">
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="hover:text-red hover:border-red flex w-full cursor-pointer items-center justify-center gap-1 rounded-full border border-rose-300 bg-white py-2 font-semibold text-rose-900 transition duration-100 ease-in-out"
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="icon cart" />
            Add to Cart
          </button>
        ) : (
          <div className="bg-red flex w-full items-center justify-between gap-4 rounded-full px-5 py-2 font-semibold text-white">
            <button
              onClick={handleDecrement}
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white hover:opacity-80"
            >
              <img
                src="./assets/images/icon-decrement-quantity.svg"
                alt="icon decrement"
              />
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white hover:opacity-80"
            >
              <img
                src="./assets/images/icon-increment-quantity.svg"
                alt="icon increment"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DessertItem;
