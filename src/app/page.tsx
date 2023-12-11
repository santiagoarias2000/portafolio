import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./all/Header";
import Hero from "./all/Hero";
import About from "./all/About";
import Services from "./all/Service";
import style from "./all/page.module.css";
import Tegno from "./all/Tegno";
import Counter from "./all/Counter";

export default function Home() {
  return (
    <>
      <Header />
      <body className={style.body}>
        <Hero />
        <About />
        <Services />
        <Tegno />
        <Counter/>
        <main id="main"></main>
      </body>
    </>
  );
}
