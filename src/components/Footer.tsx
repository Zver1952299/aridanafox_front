import React from "react";

const Footer = () => {
  return (
    <div className="text-center relative py-4">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        src="/src/assets/bg/back-for-articles.jpg"
        alt="background"
      />
      <span>Все права защищены © 2025 Aridana</span>
    </div>
  );
};

export default Footer;
