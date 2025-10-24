import "./App.css";
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="font-[jura] text-white">
        <Header />
        <Hero />
        <About />
        <Articles />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
