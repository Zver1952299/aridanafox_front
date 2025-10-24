import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections = ["hero", "about", "articles", "services"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={`fixed bg-black/10 w-full z-30 transition-colors duration-500 ${
        scrolled ? "bg-black/10" : "bg-black/50"
      }`}
    >
      <div className="container px-12 mx-auto flex m-auto justify-between items-center h-21">
        <p className="text-4xl">Aridana</p>
        <nav className="">
          <ul className="flex gap-4 text-[20px]">
            <li
              className={`text-myOrange cursor-pointer ${
                activeSection === "hero" ? "text-myOrange" : "text-white"
              }`}
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            >
              Главная
            </li>
            <li
              className={`text-myOrange cursor-pointer ${
                activeSection === "about" ? "text-myOrange" : "text-white"
              }`}
              onClick={() => scrollToSection("about")}
            >
              Обо мне
            </li>
            <li
              className={`text-myOrange cursor-pointer ${
                activeSection === "articles" ? "text-myOrange" : "text-white"
              }`}
              onClick={() => scrollToSection("articles")}
            >
              Статьи
            </li>
            <li
              className={`text-myOrange cursor-pointer ${
                activeSection === "services" ? "text-myOrange" : "text-white"
              }`}
              onClick={() => scrollToSection("services")}
            >
              Услуги
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
