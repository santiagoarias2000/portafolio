"use client"

import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";

export default function Hero() {

    const textElement = useRef(null);

    useEffect(() => {
      const options = {
        strings: ["Designer", "Developer", "Freelancer", "Development"],
        typeSpeed: 50, // Velocidad de escritura
        backSpeed: 25, // Velocidad de retroceso
        loop: true, // Repetir la animación
      };
  
      // Crea una instancia de Typed.js en el elemento deseado
      const typed = new Typed(textElement.current, options);
  
      // Limpia la instancia de Typed.js cuando el componente se desmonta
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <>
      <div
        id="hero"
        className={`${styles.hero} ${styles.route} ${styles.bg_image}`}
      >
        <div className={styles.overlay_itro}></div>
        <div className={`${styles.hero_content} ${styles.display_table}`}>
          <div className={styles.table_cell}>
            <div className={styles.container}>
              {/* <p className={`${styles.display_6} ${styles.color_d}`}>Hola mundo</p> */}
              <h1 className={`${styles.hero_title} mb-4`}>
                Soy Santiago Arias
              </h1>
              <p className={styles.hero_subtitle}>
              <span ref={textElement}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
