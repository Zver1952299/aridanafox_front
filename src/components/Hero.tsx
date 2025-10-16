import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[876px] overflow-hidden">
      {/* Первая картинка (фон) */}
      <img
        src="/src/assets/bg/forest.jpg"
        alt="фон"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
      />

      {/* Вторая картинка (поверх первой) */}
      <img
        src="/src/assets/bg/forest-2.jpg"
        alt="оверлей"
        className="absolute top-0 left-0 h-[876px] w-full opacity-10"
      />

      {/* Текст поверх */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        Привет! Это Hero
      </div>
    </div>
  );
};

export default Hero;
