"use client"
import { useTranslation } from "react-i18next";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Header() {
    // const { t } = useTranslation('common');
  return (
    <>
      <header
        id="header"
        className={`${styles.header_scrolled} ${styles.header} fixed-top`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className={styles.logo}>
            <a className={styles.a_linklogo} href="/">
              Portafolio
            </a>
          </h1>

          <nav id="navbar" className={styles.navbar}>
            <ul className={styles.ul_navbar}>
              <li className={styles.li_navbar}>
                <a
                  className={`nav-link ${styles.a_link} ${styles.scrollto} ${styles.active}`}
                  href="#hero"
                >
                  Inicio
                </a>
              </li>
              <li className={styles.li_navbar}>
                <a
                  className={`nav-link ${styles.a_link} ${styles.scrollto}`}
                  href="#about"
                >
                  Acerca de mi
                </a>
              </li>
              <li className={styles.li_navbar}>
                <a
                  className={`nav-link ${styles.a_link} ${styles.scrollto}`}
                  href="#services"
                >
                  Servicios
                </a>
              </li>
              <li className={styles.li_navbar}>
                <a
                  className={`nav-link ${styles.a_link} ${styles.scrollto}`}
                  href="#work"
                >
                  Trabajos
                </a>
              </li>
              {/* <li className={styles.li_navbar}>
                <a
                  className={`nav-link ${styles.a_link} ${styles.scrollto}`}
                  href="#blog"
                >
                  Blog
                </a>
              </li> */}
              <li className={styles.li_navbar}>
                <a
                  className={`nav-link ${styles.a_link} ${styles.scrollto}`}
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
