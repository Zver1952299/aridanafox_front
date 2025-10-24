import React from "react";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <div id="articles" className="text-2xl relative scroll-mt-8">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        src="/src/assets/bg/back-for-articles.jpg"
        alt="background"
      />
      <div className="container m-auto px-12  flex flex-col justify-center items-center relative">
        <h2 className="text-4xl mt-14 mb-7">Статьи</h2>
        <div className="mb-10 w-full flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-between items-stretch border-b border-white/30 py-8 last:border-none"
          >
            <img
              className="w-[242px]"
              src="/src/assets/article/taro.png"
              alt="taro"
            />
            <div className="flex flex-col justify-between flex-1">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  Таро не предсказывает — оно показывает
                </h3>
                <span className="text-[20px] font-medium opacity-70">
                  Почему Таро — не гадание, а способ увидеть себя и свои выборы
                  с другой стороны.
                </span>
              </div>
              <a
                className="font-medium text-[20px] text-myOrange opacity-80 text-end"
                href="google.com"
              >
                читать статью...
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-between items-stretch border-b border-white/30 py-8 last:border-none"
          >
            <img
              className="w-[242px]"
              src="/src/assets/article/taro.png"
              alt="taro"
            />
            <div className="flex flex-col justify-between flex-1">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  Таро не предсказывает — оно показывает
                </h3>
                <span className="text-[20px] font-medium opacity-70">
                  Почему Таро — не гадание, а способ увидеть себя и свои выборы
                  с другой стороны.
                </span>
              </div>
              <a
                className="font-medium text-[20px] text-myOrange opacity-80 text-end"
                href="google.com"
              >
                читать статью...
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-between items-stretch border-b border-white/30 py-8 last:border-none"
          >
            <img
              className="w-[242px]"
              src="/src/assets/article/taro.png"
              alt="taro"
            />
            <div className="flex flex-col justify-between flex-1">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  Таро не предсказывает — оно показывает
                </h3>
                <span className="text-[20px] font-medium opacity-70">
                  Почему Таро — не гадание, а способ увидеть себя и свои выборы
                  с другой стороны.
                </span>
              </div>
              <a
                className="font-medium text-[20px] text-myOrange opacity-80 text-end"
                href="google.com"
              >
                читать статью...
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
