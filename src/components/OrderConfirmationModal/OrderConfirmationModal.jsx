import React from "react";
import { useCart } from "../../contexts/CartContext";

const OrderConfirmationModal = ({ onClose }) => {
  const { cartItems, clearCart } = useCart();

  const handleNewOrder = () => {
    clearCart();
    onClose();
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative m-4 flex max-h-[90vh] w-full max-w-sm flex-col items-start gap-2 overflow-y-auto rounded-xl bg-white p-5 shadow-lg xl:overflow-y-hidden">
        <img
          className="h-10 w-10"
          src="./assets/images/icon-order-confirmed.svg"
          alt="icon confirmed"
        />
        <h2 className="text-3xl font-bold text-rose-900">Order Confirmed</h2>
        <p className="text-sm text-rose-500">We hope you enjoy your food!</p>
        <div className="mt-3 w-full space-y-2 rounded-lg bg-rose-100 p-4">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-400 italic">Cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b border-rose-300 pb-2 text-sm"
                >
                  <img
                    className="h-10 w-10 rounded"
                    src={item.image.desktop}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-rose-900">{item.name}</p>
                    <p>
                      <span className="text-red pr-2 font-semibold">
                        {item.quantity}x
                      </span>
                      <span className="text-rose-400">
                        {" "}
                        @ ${item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <p className="ml-auto font-semibold text-rose-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm">Order Total</p>
                <span className="text-xl font-bold text-rose-900">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </>
          )}
        </div>
        <button
          onClick={handleNewOrder}
          className="bg-red mt-4 w-full cursor-pointer rounded-3xl p-3 text-sm font-medium text-white transition duration-100 ease-in-out hover:bg-orange-900"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
