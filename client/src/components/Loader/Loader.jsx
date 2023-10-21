import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid h-16 w-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
