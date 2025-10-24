import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="mb-12 min-h-screen scroll-mt-24">
      <h2 className="text-4xl mt-14 mb-12 text-center">Услуги</h2>
      <div className="container mx-auto px-12 flex justify-between">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[300px] bg-white/5 flex flex-col justify-between items-center px-4 py-6 rounded-xl"
        >
          <img
            className="w-[242px]"
            src="/src/assets/article/taro.png"
            alt="taro"
          />
          <h3 className="font-bold text-[16px] my-2">
            Расклад Таро “Путь отношений”
          </h3>
          <span className="text-[12px] px-4 mb-2">
            Поможет понять чувства партнёра, истинные мотивы и потенциал ваших
            отношений. Разберём, куда движется связь и что можно изменить, чтобы
            вернуть гармонию.
          </span>
          <span>Цена: 100$</span>
          <span>Время: 40-60 минут</span>
          <span>Формат: онлайн/оффлайн</span>
          <a className="text-myOrange mt-2" href="google.com">
            Заказать услугу
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[300px] bg-white/5 flex flex-col justify-between items-center px-4 py-6 rounded-xl"
        >
          <img
            className="w-[242px]"
            src="/src/assets/article/taro.png"
            alt="taro"
          />
          <h3 className="font-bold text-[16px] my-2">
            Расклад Таро “Путь отношений”
          </h3>
          <span className="text-[12px] px-4 mb-2">
            Поможет понять чувства партнёра, истинные мотивы и потенциал ваших
            отношений. Разберём, куда движется связь и что можно изменить, чтобы
            вернуть гармонию.
          </span>
          <span>Цена: 100$</span>
          <span>Время: 40-60 минут</span>
          <span>Формат: онлайн/оффлайн</span>
          <a className="text-myOrange mt-2" href="google.com">
            Заказать услугу
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[300px] bg-white/5 flex flex-col justify-between items-center px-4 py-6 rounded-xl"
        >
          <img
            className="w-[242px]"
            src="/src/assets/article/taro.png"
            alt="taro"
          />
          <h3 className="font-bold text-[16px] my-2">
            Расклад Таро “Путь отношений”
          </h3>
          <span className="text-[12px] px-4 mb-2">
            Поможет понять чувства партнёра, истинные мотивы и потенциал ваших
            отношений. Разберём, куда движется связь и что можно изменить, чтобы
            вернуть гармонию.
          </span>
          <span>Цена: 100$</span>
          <span>Время: 40-60 минут</span>
          <span>Формат: онлайн/оффлайн</span>
          <a className="text-myOrange mt-2" href="google.com">
            Заказать услугу
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
