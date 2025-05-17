import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="font-red-hat-text flex min-h-screen w-full flex-col items-start justify-around bg-rose-100 pt-10 lg:px-4 lg:flex-row">
      {children}
    </div>
  );
};

export default MainContainer;
