import React from "react";
import { motion, type Variants } from "framer-motion";

const Hero = () => {
  const container: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 60 },
    },
  };

  return (
    <div id="hero" className="relative w-full h-[876px] overflow-hidden">
      <img
        src="/src/assets/bg/forest.jpg"
        alt="back-1"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 object-cover"
      />

      <img
        src="/src/assets/bg/forest-2.jpg"
        alt="back-2"
        className="absolute top-0 left-0 h-[876px] w-full opacity-20 object-cover"
      />
      <div className="flex justify-center gap-80 items-center h-[876px] relative z-20">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="top-[200px] h-[800px] relative w-[255px] object-cover opacity-70"
          src="/src/assets/hero/hero.png"
          alt="hero"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-white text-[4rem] font-medium w-[327px] text-center"
        >
          <motion.span className="inline-block" variants={item}>
            Я
          </motion.span>{" "}
          <motion.span className="text-myOrange inline-block" variants={item}>
            помогаю
          </motion.span>{" "}
          <motion.span className="text-[3rem] inline-block" variants={item}>
            найти путь
          </motion.span>{" "}
          <motion.span className="text-[3rem] inline-block" variants={item}>
            во
          </motion.span>{" "}
          <motion.span
            className="text-[4rem] text-black text-shadow-[0_0_25px_white] inline-block"
            variants={item}
          >
            мраке
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
