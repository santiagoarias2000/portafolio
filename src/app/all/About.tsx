import card from "../../assets/card_img.jpg";
import javascript from "../../assets/javascript_logo_0.png";
import node from "../../assets/node_logo.png";
import ptyhon from "../../assets/python.png";
import sql from "../../assets/sql.png";
import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <section
        id="about"
        className={`${styles.about_mf} ${styles.sect_pt4} route`}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={styles.box_shadow_full}>
                <div className={`${styles.about_p} row`}>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className={styles.about_img}>
                          <Image
                            src={card}
                            width={200}
                            height={200}
                            className="img-fluid rounded b-shadow-a"
                            alt="Imagen de perfil"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className={styles.title_s}>Nombre: </span>{" "}
                            <span>Santiago Andres Arias Mancilla</span>
                          </p>
                          <p>
                            <span className={styles.title_s}>Perfil: </span>{" "}
                            <span>full stack developer</span>
                          </p>
                          <p>
                            <span className={styles.title_s}>Correo: </span>{" "}
                            <span>santiago.ariasm@usantoto.edu.co</span>
                          </p>
                          <p>
                            <span className={styles.title_s}>Telefono: </span>{" "}
                            <span>3164448635</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.skill_mf}>
                      <p className={styles.title_s}>Habilidades </p>
                      <span>
                        <Image
                          src={javascript}
                          width={50}
                          height={50}
                          alt="logo"
                        ></Image>
                        JAVASCRIPT
                      </span>{" "}
                      <span className="pull-right">85%</span>
                      <div className={styles.progress}>
                        <div
                          className={styles.progress_bar}
                          style={{ backgroundColor: "#f7e025", width: "85%" }}
                        ></div>
                      </div>
                      <span>
                        <Image
                          src={node}
                          width={50}
                          height={53}
                          alt="logo"
                        ></Image>{" "}
                        NODE.JS
                      </span>{" "}
                      <span className="pull-right">75%</span>
                      <div className={styles.progress}>
                        <div
                          className={styles.progress_bar}
                          style={{ backgroundColor: "#78ae69", width: "75%" }}
                        ></div>
                      </div>
                      <span>
                        <Image
                          src={ptyhon}
                          width={50}
                          height={50}
                          alt="logo"
                        ></Image>{" "}
                        PYTHON
                      </span>{" "}
                      <span className="pull-right">50%</span>
                      <div className={styles.progress}>
                        <div
                          className={styles.progress_bar}
                          style={{ backgroundColor: "#5a8bb2", width: "55%" }}
                        ></div>
                      </div>
                      <span>
                        <Image
                          src={sql}
                          width={50}
                          height={50}
                          alt="logo"
                        ></Image>
                        SQL
                      </span>{" "}
                      <span className="pull-right">80%</span>
                      <div className={styles.progress}>
                        <div
                          className={styles.progress_bar}
                          style={{ backgroundColor: "#1e73df", width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me mt-5 pt- pt-md-0">
                      <div className={styles.title_box_2}>
                        <h5 className={styles.title_left}>Acerca de mi</h5>
                      </div>
                      <p className="text lead">
                        Estudiante de 9 semestre de Ingeniería de Sistemas con
                        experiencia en desarrollo Backend (Java, Python, Spring,
                        TypeScript), manejo de bases de datos relaciones (MySQL,
                        PostgreSQL) y no relaciónales (mongodb) conocimientos
                        avanzados en Frontend (HTML5, XHTML, CSS3, JS, React.ts,
                        Angular). Dentro de mis habilidades personales resalto
                        la facilidad de aprender, de adaptación a diferentes
                        situaciones, la capacidad de atención, decisión
                        organización y escucha activa, aptitud para trabajo en
                        equipo.
                      </p>
                      {/* <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
