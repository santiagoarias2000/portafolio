
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./all/Header";
import Hero from "./all/Hero";
import About from "./all/About";
import Services from "./all/Service";
import style from "./all/page.module.css";
import Tegno from "./all/Tegno";
import Counter from "./all/Counter";
import Head from "next/head";
import Portafolio from "./all/Portafolio";
import Contact from "./all/Contact";


export default function Home() {

  return (
    <>
      <Head>
        <title>Santiago Arias Mancilla</title>
      </Head>
      <Header />
      <Hero />
      <body id="body" className={style.body}>
        <main id="main" style={{ backgroundColor: "#f5f5f5" }}>
          <About />
          <Services />
          <Tegno />
          <Counter />
          <Portafolio />
          <Contact />
        </main>
      </body>
    </>
  );
}
