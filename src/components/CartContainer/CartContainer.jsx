import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import OrderConfirmationModal from "../OrderConfirmationModal/OrderConfirmationModal";

const CartContainer = () => {
  const { cartItems, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto mb-5 flex max-h-full w-90 flex-col gap-5 rounded-lg bg-white p-5 shadow-lg lg:mx-0 lg:mb-0">
      <h2 className="text-red text-xl font-bold">
        Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
      </h2>

      {cartItems.length === 0 ? (
        <>
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="empty cart"
            className="mx-auto max-w-25"
          />
          <p className="text-center text-sm font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <img
                  src={item.image.desktop}
                  alt={item.name}
                  className="h-10 w-10 rounded"
                />
                <div className="flex-1 px-2">
                  <p className="text-sm font-bold text-rose-900">{item.name}</p>
                  <p className="text-sm font-semibold text-rose-400">
                    <span className="text-red pr-1 font-bold">
                      {item.quantity}x
                    </span>{" "}
                    @ ${item.price.toFixed(2)}
                    <strong className="pl-1">
                      {" "}
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border-1 border-rose-400 hover:opacity-50"
                >
                  <img
                    src="./assets/images/icon-remove-item.svg"
                    alt="icon remove"
                  />
                </button>
              </div>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-rose-100 pt-3">
              <span className="text-sm font-semibold text-rose-900">
                Order Total
              </span>
              <span className="text-xl font-bold text-rose-900">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-rose-100 p-3 text-sm text-rose-900">
              <img
                src="./assets/images/icon-carbon-neutral.svg"
                alt="icon carbon neutral"
              />
              <p>
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <button
              onClick={handleConfirmOrder}
              className="bg-red mt-3 cursor-pointer rounded-3xl p-3 font-medium text-white transition duration-100 ease-in-out hover:bg-orange-900"
            >
              Confirm Order
            </button>
          </div>

          {isModalOpen && (
            <OrderConfirmationModal onClose={() => setIsModalOpen(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default CartContainer;
