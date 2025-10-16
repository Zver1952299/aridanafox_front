import React from "react";

const Header = () => {
  return (
    <div className="fixed bg-black/10 w-full">
      <div className="container mx-auto flex m-auto justify-between items-center h-21">
        <p className="text-white text-4xl">Aridana</p>
        <button className="text-white text-2xl">Click</button>
      </div>
    </div>
  );
};

export default Header;
