import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="container m-auto px-12 my-14 flex flex-col justify-center items-center text-2xl scroll-mt-20"
    >
      <h2 className="text-4xl mb-14">Обо мне</h2>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-9"
      >
        Привет! Скоро здесь будет история о женщине, которая создаёт красоту
        вокруг себя — в мелочах, в работе, в людях рядом. Она не гонится за
        идеалом, а просто делает то, что любит, вкладывая частичку души в каждое
        дело.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-9"
      >
        Она верит, что вдохновение живёт в простых моментах: утреннем солнце,
        чашке ароматного кофе, искренней улыбке. Именно из таких деталей
        рождаются настоящие идеи — живые, тёплые и искренние.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-9"
      >
        Совсем скоро вы узнаете больше о её пути, мечтах и том, что делает её
        творчество особенным. А пока — добро пожаловать в пространство, где всё
        создаётся с любовью и верой в красоту простых вещей. 💫
      </motion.span>
    </div>
  );
};

export default About;
